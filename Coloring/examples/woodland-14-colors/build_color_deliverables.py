"""Package exact color-group layers without changing the illustration.

Run once the matching PNG sets, assembled image and layers.json are final.
"""
from pathlib import Path
import base64
import csv
import hashlib
import json
import random
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image
from pypdf import PdfReader
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent
PDF_NAME = 'woodland-color-layer-print-pack.pdf'
TITLE = 'Woodland color study'


def data_uri(path):
    return 'data:image/png;base64,' + base64.b64encode(path.read_bytes()).decode()


def bw_master_path():
    for name in ('assembled-black-and-white.png', 'source/master-black-and-white.png', 'source/simplified-master-black-and-white.png'):
        if (ROOT / name).is_file():
            return ROOT / name
    raise FileNotFoundError('A matching assembled black-and-white master is required')


def validate(parts, width, height):
    n = len(parts)
    assert n > 0 and len({p['number'] for p in parts}) == n
    assert len({p['hex'].upper() for p in parts}) == n
    assert len({p['filename'] for p in parts}) == n
    for folder in ('colored', 'black-and-white'):
        assert len(list((ROOT / folder).glob('*.png'))) == n, folder
    coverage = np.zeros((height, width), dtype=np.uint16)
    stacks = [Image.new('RGBA', (width, height)) for _ in range(2)]
    masks, images, areas = set(), [], []
    for p in parts:
        ci = Image.open(ROOT / 'colored' / p['filename']).convert('RGBA')
        bi = Image.open(ROOT / 'black-and-white' / p['filename']).convert('RGBA')
        assert ci.size == bi.size == (width, height), p['name']
        c, b = np.asarray(ci), np.asarray(bi)
        assert np.array_equal(c[:, :, 3], b[:, :, 3]), p['name']
        assert set(np.unique(c[:, :, 3])) <= {0, 255}, p['name']
        mask = c[:, :, 3] == 255
        fill = mask & np.any(c[:, :, :3] != 0, axis=2)
        fraction = float(fill.sum() / (width * height))
        assert fraction > 0, f"No usable fill pixels: {p['name']}"
        if 'fill_fraction' in p:
            assert abs(fraction - float(p['fill_fraction'])) <= max(1e-6, 1 / (width * height)), p['name']
        p['fill_fraction'] = fraction
        color = tuple(int(p['hex'][i:i+2], 16) for i in (1, 3, 5))
        assert {tuple(v) for v in np.unique(c[mask, :3], axis=0)} <= {(0, 0, 0), color}, p['name']
        assert {tuple(v) for v in np.unique(b[mask, :3], axis=0)} <= {(0, 0, 0), (255, 255, 255)}, p['name']
        coverage += mask
        masks.add(hashlib.sha256(mask.tobytes()).hexdigest())
        stacks[0].alpha_composite(ci); stacks[1].alpha_composite(bi)
        images.append(ci)
        areas.append({'number': p['number'], 'name': p['name'], 'hex': p['hex'], 'fill_fraction': fraction, 'fill_percent': fraction * 100})
    assert len(masks) == n and np.all(coverage == 1), 'Missing, duplicated, or overlapping mask pixels'
    target = np.asarray(Image.open(ROOT / 'assembled-color.png').convert('RGBA'))
    bw_target = np.asarray(Image.open(bw_master_path()).convert('RGBA'))
    assert np.array_equal(np.asarray(stacks[0]), target), 'Color reconstruction differs'
    assert np.array_equal(np.asarray(stacks[1]), bw_target), 'Uncolored reconstruction differs'
    for seed in range(3):
        order = list(range(n)); random.Random(seed).shuffle(order)
        stack = Image.new('RGBA', (width, height))
        for i in order: stack.alpha_composite(images[i])
        assert np.array_equal(np.asarray(stack), target), 'Stack order changes the picture'
    return areas


def create_pdf(parts, width, height):
    n = len(parts)
    font_pairs = [
        (Path('/System/Library/Fonts/Supplemental/Arial.ttf'), Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')),
        (Path('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'), Path('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf')),
        (Path('C:/Windows/Fonts/arial.ttf'), Path('C:/Windows/Fonts/arialbd.ttf')),
    ]
    pair = next((pair for pair in font_pairs if all(p.is_file() for p in pair)), None)
    if pair:
        pdfmetrics.registerFont(TTFont('StudyArial', str(pair[0])))
        pdfmetrics.registerFont(TTFont('StudyArialBold', str(pair[1])))
    else:
        pdfmetrics.registerFont(pdfmetrics.Font('StudyArial', 'Helvetica', 'WinAnsiEncoding'))
        pdfmetrics.registerFont(pdfmetrics.Font('StudyArialBold', 'Helvetica-Bold', 'WinAnsiEncoding'))
    c = canvas.Canvas(str(ROOT / PDF_NAME), pagesize=(612, 792), pageCompression=1)
    c.setTitle(f'{TITLE} - {n} color layers')
    c.setSubject(f'{n} uncolored layers, {n} matching flat-color layers, and their exact assembled picture')
    c.setAuthor('Woodland coloring layer collection')
    scale = min(510 / width, 680 / height)
    box = ((612 - width * scale) / 2, 56 + (680 - height * scale) / 2, width * scale, height * scale)

    def crosses():
        c.setStrokeColorRGB(0, 0, 0); c.setLineWidth(0.5)
        for x, y in ((44, 49), (568, 49), (44, 743), (568, 743)):
            c.line(x - 4, y, x + 4, y); c.line(x, y - 4, x, y + 4)

    for folder, label in (('black-and-white', 'Uncolored'), ('colored', 'Colored')):
        c.bookmarkPage(folder); c.addOutlineEntry(f'{n} {label.lower()} color layers', folder, 0)
        for p in parts:
            key = f"{folder}-{p['number']}"
            c.bookmarkPage(key); c.addOutlineEntry(f"{p['number']:02d}. {p['name']}", key, 1)
            heading = f"{label} {p['number']:02d} / {n} - {p['name']}"
            size = 13.0
            while pdfmetrics.stringWidth(heading, 'StudyArialBold', size) > 480 and size > 9:
                size -= 0.5
            c.setFillColorRGB(0, 0, 0); c.setFont('StudyArialBold', size); c.drawString(36, 769, heading)
            c.setFont('StudyArial', 8); c.drawString(72, 750, f"One palette color; fill area {p['fill_fraction'] * 100:.2f}% of the full canvas")
            if folder == 'colored':
                c.setFillColor(HexColor(p['hex'])); c.rect(548, 748, 20, 14, fill=1, stroke=0)
                c.setFillColorRGB(0, 0, 0); c.setFont('StudyArial', 7); c.drawRightString(568, 774, p['hex'])
            c.drawImage(ImageReader(str(ROOT / folder / p['filename'])), *box, mask='auto')
            crosses(); c.setFont('StudyArial', 8)
            c.drawString(36, 24, 'Print at 100%. Keep the full page; align all four registration crosses when stacking.')
            c.showPage()
    c.bookmarkPage('assembled'); c.addOutlineEntry(f'All {n} color layers assembled', 'assembled', 0)
    c.setFillColorRGB(0, 0, 0); c.setFont('StudyArialBold', 13); c.drawString(36, 769, f'{TITLE} - all {n} color layers')
    c.drawImage(ImageReader(str(ROOT / 'assembled-color.png')), *box)
    crosses(); c.setFont('StudyArial', 8); c.drawString(36, 24, 'Same canvas, scale, and placement as every individual layer.')
    c.showPage(); c.save()
    reader = PdfReader(ROOT / PDF_NAME)
    assert len(reader.pages) == 2 * n + 1
    assert all(float(p.mediabox.width) == 612 and float(p.mediabox.height) == 792 for p in reader.pages)
    return box


def create_svgs(parts, width, height):
    svg, ink = 'http://www.w3.org/2000/svg', 'http://www.inkscape.org/namespaces/inkscape'
    ET.register_namespace('', svg); ET.register_namespace('inkscape', ink)
    for folder in ('colored', 'black-and-white'):
        root = ET.Element('{' + svg + '}svg', {'width': str(width), 'height': str(height), 'viewBox': f'0 0 {width} {height}'})
        ET.SubElement(root, '{' + svg + '}title').text = TITLE + ' - ' + folder
        for p in parts:
            group = ET.SubElement(root, '{' + svg + '}g', {'id': f"layer-{p['number']:02d}", '{' + ink + '}groupmode': 'layer', '{' + ink + '}label': f"{p['number']:02d} {p['name']} ({p['hex']})"})
            ET.SubElement(group, '{' + svg + '}image', {'x': '0', 'y': '0', 'width': str(width), 'height': str(height), 'href': data_uri(ROOT / folder / p['filename'])})
        ET.ElementTree(root).write(ROOT / f'woodland-{folder}-layers.svg', encoding='utf-8', xml_declaration=True)


def create_viewer(parts, width, height):
    n = len(parts)
    payload = [dict(number=p['number'], name=p['name'], hex=p['hex'], fill_fraction=p['fill_fraction'],
                    colored=data_uri(ROOT / 'colored' / p['filename']), bw=data_uri(ROOT / 'black-and-white' / p['filename'])) for p in parts]
    page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Woodland color study</title><style>
:root{font:16px system-ui,sans-serif;color:#27373d;background:#f5f3ed}*{box-sizing:border-box}body{margin:0;padding:20px}.page{max-width:1230px;margin:auto}.eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;color:#617967;text-transform:uppercase;margin:0 0 5px}h1{font-family:Georgia,serif;font-size:30px;font-weight:600;line-height:1.1;margin:0 0 9px}.intro{font-size:14px;line-height:1.5;max-width:850px;margin:0}.toolbar{display:flex;gap:7px;align-items:center;flex-wrap:wrap;margin:14px 0}button{font:inherit;font-size:13px;padding:7px 11px;cursor:pointer;border:1px solid #aebbb7;background:#fff;border-radius:6px;color:inherit}button:hover{background:#edf3ed}button[aria-pressed=true]{background:#305945;border-color:#305945;color:white}.layout{display:grid;grid-template-columns:minmax(360px,1fr) 365px;gap:20px;align-items:start}.art-panel{padding:10px;background:#fff;border:1px solid #d3dad3;border-radius:10px;display:grid;justify-items:center}.canvas{width:100%;max-width:calc((100vh - 218px) * WIDTH / HEIGHT);min-width:290px;aspect-ratio:WIDTH/HEIGHT;position:relative;overflow:hidden;background-color:white;background-image:linear-gradient(45deg,#e6e8e5 25%,transparent 25%),linear-gradient(-45deg,#e6e8e5 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e6e8e5 75%),linear-gradient(-45deg,transparent 75%,#e6e8e5 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0}.canvas img{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.controls{background:white;border:1px solid #d3dad3;padding:9px 13px;border-radius:10px}.row{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #edf0eb}.row:last-child{border-bottom:0}.row label{display:flex;align-items:center;gap:8px;flex:1;font-size:13px;line-height:1.2}.row input{width:16px;height:16px;flex:none;margin:0;accent-color:#305945}.swatch{width:20px;height:20px;border:1px solid #8a9690;border-radius:4px;flex:none}.label-text{flex:1}.label-text small{display:block;font-size:10px;color:#6d7770;margin-top:2px}.row button{font-size:11px;padding:4px 7px}#count{font-size:13px;font-weight:600;margin-left:auto;color:#4f6859}.footer{font-size:12px;line-height:1.5;color:#617067;margin:12px 0 0}a{color:#295f7e;text-underline-offset:2px}.links{font-size:13px;margin-top:12px}@media(max-width:800px){body{padding:15px}.layout{grid-template-columns:1fr}.canvas{max-width:100%;min-width:0}.controls{width:100%}#count{margin-left:0}.eyebrow{margin-top:3px}}
</style><div class="page"><p class="eyebrow">A woodland palette</p><h1>Woodland color study</h1><p class="intro">COUNT solid fill colors with black outlines. Each layer collects one color wherever it appears naturally in the picture. Use <strong>Only</strong> to inspect a color, then show all to rebuild the illustration.</p><div class="toolbar"><button id="all">Show all COUNT</button><button id="none">Hide all</button><button id="color" aria-pressed="true">Colored</button><button id="bw" aria-pressed="false">Black and white</button><span id="count" aria-live="polite"></span></div><div class="layout"><div class="art-panel"><div class="canvas" id="canvas" aria-label="Layer stack preview"></div></div><section class="controls" id="controls" aria-label="Color layer controls"></section></div><p class="links"><a href="PDFNAME">Printable PAGES-page pack</a> &nbsp;·&nbsp; <a href="assembled-color.png">Assembled picture</a> &nbsp;·&nbsp; <a href="layer-key.csv">Palette and layer key</a></p><p class="footer">All layers keep the same size and position. For physical stacking, print at 100% on clear film or tracing paper and align the registration crosses. Color groups can include several separate natural objects.</p></div><script>
const layers=PAYLOAD,canvas=document.getElementById('canvas'),controls=document.getElementById('controls'),count=document.getElementById('count');for(const p of layers){const img=document.createElement('img');img.src=p.colored;img.alt='Layer '+p.number+': '+p.name;img.dataset.number=p.number;canvas.append(img);const row=document.createElement('div');row.className='row';const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.checked=true;input.dataset.number=p.number;input.addEventListener('change',update);const swatch=document.createElement('span');swatch.className='swatch';swatch.style.backgroundColor=p.hex;const text=document.createElement('span');text.className='label-text';text.textContent=String(p.number).padStart(2,'0')+' '+p.name;const sub=document.createElement('small');sub.textContent=p.hex.toUpperCase()+' · '+(p.fill_fraction*100).toFixed(2)+'% fill';text.append(sub);label.append(input,swatch,text);const only=document.createElement('button');only.textContent='Only';only.setAttribute('aria-label','Show only '+p.name);only.addEventListener('click',()=>{for(const q of controls.querySelectorAll('input'))q.checked=q===input;update()});row.append(label,only);controls.append(row)}function update(){let n=0;for(const q of controls.querySelectorAll('input')){canvas.querySelector('img[data-number="'+q.dataset.number+'"]').style.display=q.checked?'block':'none';if(q.checked)n++}count.textContent=n+' / '+layers.length+' visible'}document.getElementById('all').onclick=()=>{for(const q of controls.querySelectorAll('input'))q.checked=true;update()};document.getElementById('none').onclick=()=>{for(const q of controls.querySelectorAll('input'))q.checked=false;update()};for(const name of ['colored','bw'])document.getElementById(name==='colored'?'color':'bw').onclick=()=>{for(const p of layers)canvas.querySelector('img[data-number="'+p.number+'"]').src=p[name];document.getElementById('color').setAttribute('aria-pressed',String(name==='colored'));document.getElementById('bw').setAttribute('aria-pressed',String(name==='bw'))};update();
</script></html>'''
    page = page.replace('WIDTH', str(width)).replace('HEIGHT', str(height)).replace('COUNT', str(n)).replace('PAGES', str(2*n+1)).replace('PDFNAME', PDF_NAME).replace('PAYLOAD', json.dumps(payload, separators=(',', ':')))
    (ROOT / 'layer-viewer.html').write_text(page)


def main():
    manifest = json.loads((ROOT / 'layers.json').read_text())
    parts = sorted(manifest['layers'], key=lambda p: p['number'])
    width, height = int(manifest['canvas']['width']), int(manifest['canvas']['height'])
    n = len(parts)
    areas = validate(parts, width, height)
    with (ROOT / 'layer-key.csv').open('w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['layer', 'palette_color_group', 'fillable_fraction_of_canvas', 'fillable_percent_of_canvas', 'solid_fill_hex', 'black_and_white_file', 'colored_file'])
        for p in parts:
            writer.writerow([p['number'], p['name'], p['fill_fraction'], f"{p['fill_fraction'] * 100:.4f}", p['hex'], 'black-and-white/' + p['filename'], 'colored/' + p['filename']])
    box = create_pdf(parts, width, height)
    create_svgs(parts, width, height); create_viewer(parts, width, height)
    readme = f'''WOODLAND COLOR STUDY - {n} PALETTE COLOR LAYERS

PRIMARY PICTURES: {2*n+1} PNGs
  black-and-white/: {n} transparent PNGs with white fill areas and black outlines.
  colored/: the same {n} transparent footprints, each with one solid fill color and black outlines.
  assembled-color.png: the exact composite of all {n} colored PNGs.

COLOR GROUPS
Each layer represents one useful palette color. That color may appear in multiple natural objects.
The layer count follows the chosen palette; there is no forced 20-layer count or minimum-area rule.
The artwork's face, hands, clothing and natural contours are not resized or cut apart to meet a layer quota.
The CSV, viewer and PDF identify each layer's color and measured fill percentage.

ALIGNMENT AND COLOR
All {2*n} layers use the same {width} x {height} canvas. Place each at x=0, y=0 without cropping or resizing.
Every pixel belongs to exactly one layer; there are no missing pixels, duplicate masks, or overlapping pixels.
The {n} layers use {n} distinct flat fill colors plus structural black outlines.
The uncolored/color footprints match exactly. The complete image is independent of stacking order.

PRINTING
The PDF has {2*n+1} US Letter pages: 1-{n} uncolored, {n+1}-{2*n} colored, and {2*n+1} assembled.
Print at Actual size / 100%. All pages use the same artwork rectangle and four registration crosses.
For physical stacking, use clear film or tracing paper. Blank PNG areas are transparent.

VIEWING AND EDITING
Open layer-viewer.html in a browser to isolate a color, toggle layers, or switch the uncolored/color sets.
The two SVGs embed the original PNGs as named layers; these are raster containers, not traced vectors.
The woodland illustration was reimagined with the built-in image_gen tool, then separated from one
shared master into matching color masks. Package checks are recorded in packaging-verification.json.
'''
    (ROOT / 'README.txt').write_text(readme)
    report = dict(title=TITLE, layer_basis='one layer per palette fill color', uncolored_layers=n,
                  colored_layers=n, assembled_images=1, primary_pngs=2*n+1,
                  canvas_pixels=[width, height], per_layer_fill=areas,
                  overlapping_pixels=0, uncovered_pixels=0, duplicate_masks=0,
                  matching_uncolored_color_footprints=n, distinct_solid_fill_colors=n,
                  colored_reconstruction_pixel_differences=0, uncolored_reconstruction_pixel_differences=0,
                  random_stacking_orders_verified=3, pdf_pages=2*n+1, pdf_artwork_rectangle_points=list(box),
                  pdf_visual_review='pending', browser_viewer_review='pending')
    (ROOT / 'packaging-verification.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({k: v for k, v in report.items() if k != 'per_layer_fill'}, indent=2))


if __name__ == '__main__':
    main()
