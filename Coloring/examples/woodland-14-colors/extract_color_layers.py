"""Normalize a generated color study to its palette, preserving all contours.

This performs color indexing and layer extraction, never geometric deformation.
Each source pixel has exactly one owner; structural black ink is assigned to
its closest adjacent color group so stacking masks reconstructs the master.
"""
from pathlib import Path
import json,re
import numpy as np
from PIL import Image,ImageDraw,ImageFont

ROOT=Path(__file__).resolve().parent
for folder in ('colored', 'black-and-white', 'previews', 'source'):
    (ROOT/folder).mkdir(parents=True, exist_ok=True)
brief=json.loads((ROOT/'brief-and-palette.json').read_text())
parts=brief['palette']
rgb=np.asarray(Image.open(ROOT/'source/generated-master.png').convert('RGB'))
h,w=rgb.shape[:2]
palette=np.array([[int(p['hex'][i:i+2],16) for i in (1,3,5)] for p in parts],dtype=np.uint8)
# The last nearest-colour class represents structural black linework.
codes=np.concatenate([palette,np.zeros((1,3),dtype=np.uint8)],axis=0)
flat=rgb.reshape(-1,3).astype(np.float32)
nearest=np.empty(len(flat),dtype=np.int16)
darkest=np.empty(len(flat),dtype=bool)
for start in range(0,len(flat),100000):
    block=flat[start:start+100000]
    d=np.sum((block[:,None,:]-palette[None,:,:].astype(np.float32))**2,axis=2)
    nearest[start:start+len(block)]=np.argmin(d,axis=1)
    darkest[start:start+len(block)]=np.sum(block**2,axis=1)<=d.min(axis=1)
nearest=nearest.reshape(h,w)
# Identify black linework by neutral darkness, not distance to the dark brown
# hair swatch. This retains delicate dark contours without absorbing hair fill.
hi=rgb.max(axis=2).astype(np.int16);lo=rgb.min(axis=2).astype(np.int16)
ink=((hi<145)&((hi-lo)<30))|(hi<45)|darkest.reshape(h,w)
labels=nearest.copy();labels[ink]=-1
directions=[(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(-1,1),(1,-1),(1,1)]
# Resolve mixed-colour raster fringes from clean interior fill, without crossing
# the source ink barriers. This keeps brown antialias fringes on every stroke
# from becoming part of the hair layer. It never expands any semantic shape.
band=ink.copy()
for _ in range(2):
    out=band.copy()
    out[1:]|=band[:-1];out[:-1]|=band[1:]
    out[:,1:]|=band[:,:-1];out[:,:-1]|=band[:,1:]
    band=out
labels=nearest.copy();labels[band]=-1
fill_iterations=0
while True:
    unknown=(labels<0)&~ink
    if not unknown.any():break
    old=labels.copy();nxt=labels.copy()
    for dy,dx in directions[:4]:
        ys=slice(max(0,dy),min(h,h+dy));xs=slice(max(0,dx),min(w,w+dx))
        sy=slice(max(0,-dy),min(h,h-dy));sx=slice(max(0,-dx),min(w,w-dx))
        src=old[sy,sx];dest=nxt[ys,xs]
        use=unknown[ys,xs]&(dest<0)&(src>=0);dest[use]=src[use]
    if not np.any(nxt!=labels):break
    labels=nxt;fill_iterations+=1
# Very narrow details without an interior seed keep their original palette ID.
unseeded=(labels<0)&~ink
labels[unseeded]=nearest[unseeded]
labels[ink]=-1
# Own ink by the nearest adjacent cleaned fill. White spaces are never included
# outside each layer's alpha footprint. This avoids duplicate outline pixels.
iterations=0
while np.any(labels<0):
    old=labels.copy();nxt=labels.copy()
    for dy,dx in directions:
        ys=slice(max(0,dy),min(h,h+dy));xs=slice(max(0,dx),min(w,w+dx))
        sy=slice(max(0,-dy),min(h,h-dy));sx=slice(max(0,-dx),min(w,w-dx))
        src=old[sy,sx];dest=nxt[ys,xs]
        use=(dest<0)&(src>=0);dest[use]=src[use]
    assert np.any(nxt!=labels),'Unassigned pixels cannot be reached'
    labels=nxt;iterations+=1

# Pale water highlights share the ivory accent fill rather than the sky layer.
yy=np.arange(h)[:,None]
labels[(labels==0)&(yy>h*.46)]=13
colored=palette[labels];colored[ink]=0
bw=np.full_like(rgb,255);bw[ink]=0
Image.fromarray(colored).save(ROOT/'assembled-color.png')
Image.fromarray(bw).save(ROOT/'assembled-black-and-white.png')
np.save(ROOT/'source/layer-id-map.npy',labels)
np.save(ROOT/'source/ink-mask.npy',ink)

for i,p in enumerate(parts):
    mask=labels==i;fill=mask&~ink
    assert fill.any(),p['name']
    name=f"{i+1:02d}-"+re.sub(r'[^a-z0-9]+','-',p['name'].lower()).strip('-')+'.png'
    for folder,source in [('colored',colored),('black-and-white',bw)]:
        rgba=np.zeros((h,w,4),dtype=np.uint8)
        rgba[mask,:3]=source[mask];rgba[mask,3]=255
        Image.fromarray(rgba).save(ROOT/folder/name)
    yy,xx=np.where(mask)
    p.update(filename=name,pixel_count=int(mask.sum()),fill_pixel_count=int(fill.sum()),
             ink_pixel_count=int((mask&ink).sum()),fill_fraction=float(fill.mean()),
             bounding_box=[int(xx.min()),int(yy.min()),int(xx.max()+1),int(yy.max()+1)])
    print(f"{i+1:02d} {p['name']}: {fill.mean()*100:.3f}%")

manifest={'title':'Woodland color study','canvas':{'width':w,'height':h},
          'grouping':'one distinct solid fill color per layer, plus structural black ink',
          'geometry':'unchanged from generated-master.png','layers':parts}
(ROOT/'layers.json').write_text(json.dumps(manifest,indent=2)+'\n')
font_candidates=[Path('/System/Library/Fonts/Supplemental/Arial.ttf'),Path('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'),Path('C:/Windows/Fonts/arial.ttf')]
font_path=next((p for p in font_candidates if p.is_file()),None)
font=ImageFont.truetype(str(font_path),19) if font_path else ImageFont.load_default()
small=ImageFont.truetype(str(font_path),16) if font_path else ImageFont.load_default()
for folder,prefix in [('colored','colored'),('black-and-white','uncolored')]:
    tw,th=240,340
    sheet=Image.new('RGB',(tw*7,th*2),'#eeeae3');draw=ImageDraw.Draw(sheet)
    for j,p in enumerate(parts):
        x=(j%7)*tw;y=(j//7)*th
        im=Image.open(ROOT/folder/p['filename']);im.thumbnail((224,298))
        back=Image.new('RGBA',im.size,'white');back.alpha_composite(im)
        sheet.paste(back.convert('RGB'),(x+(tw-im.width)//2,y+34))
        draw.text((x+9,y+5),f"{p['number']:02d}  {p['name'].split(' ')[0]}",font=font,fill='#20303a')
        draw.text((x+9,y+318),p['hex'] if folder=='colored' else 'Uncolored',font=small,fill='#20303a')
    sheet.save(ROOT/'previews'/f'{prefix}-14-layer-overview.png')
print('Interior fringe propagation iterations:',fill_iterations)
print('Unseeded narrow-detail pixels:',int(unseeded.sum()))
print('Ink ownership propagation iterations:',iterations)
