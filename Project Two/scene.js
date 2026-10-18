import {EQUIPMENT_VIEWS} from './equipment-views.js';
import {BUDDY_SPRITES, PARK_BUDDIES} from './buddy-sprites.js';

// All scene art uses the attached playground's native coordinate system.
export const PARK_VIEW = {x:0,y:210,width:1448,height:740};
export const FLOOR_QUADS = [
  [[260,338],[680,338],[679,502],[214,502]],
  [[761,338],[1186,338],[1233,502],[764,502]],
  [[204,552],[678,552],[676,743],[153,743]],
  [[765,552],[1244,552],[1296,743],[769,743]],
];
const WIDTHS = {fountain:.48,slide:.76,swing:.8,statue:.25,carousel:.72,
  'icecream-stand':.66,seesaw:.76,'merry-go-round':.70,'swimming-pool':.86,
  treehouse:.68,trampoline:.72,'picnic-pavilion':.76};
const xml = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function imagePath(file) { return globalThis.PLAYGROUND_ASSETS?.[file]||file; }
let atlasCounter = 0;

export function atlasArt(id,plot=2,className='thumbnail-art',alt='') {
  const sheet=EQUIPMENT_VIEWS[id];
  if(!sheet) return '';
  const pose=sheet.views[plot];
  const [x,y,width,height]=pose.bounds,clip=`atlas-${id}-${plot}-${++atlasCounter}`;
  return `<svg class="${className}" viewBox="${pose.bounds.join(' ')}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${xml(alt)}"><defs><clipPath id="${clip}"><rect x="${x}" y="${y}" width="${width}" height="${height}"/></clipPath></defs><image clip-path="url(#${clip})" href="${imagePath(sheet.file)}" width="${sheet.canvas[0]}" height="${sheet.canvas[1]}"/></svg>`;
}

export function pieceGeometry(id,plot) {
  const quad=FLOOR_QUADS[plot], sheet=EQUIPMENT_VIEWS[id];
  const frontWidth=quad[2][0]-quad[3][0];
  const baseline=quad[2][1]-18;
  if(id==='basketball'||id==='soccer') {
    const minX=Math.min(...quad.map(p=>p[0])),maxX=Math.max(...quad.map(p=>p[0]));
    return {x:minX,y:quad[0][1],width:maxX-minX,height:quad[2][1]-quad[0][1],court:true};
  }
  const bounds=sheet?.views[plot]?.bounds||[0,0,1,1];
  let width=frontWidth*(WIDTHS[id]||.68),height=width*bounds[3]/bounds[2];
  const maxHeight=plot<2?220:230;
  if(height>maxHeight){width*=maxHeight/height;height=maxHeight;}
  const center=(quad[3][0]+quad[2][0])/2;
  return {x:center-width/2,y:baseline-height,width,height,court:false};
}

function courtArt(id,plot,uid) {
  // The two native examples in the user's source image are the prepared
  // rear/front views. Their symmetric counterparts fit the opposite plots.
  const sourcePlot=id==='basketball'?(plot<2?0:3):(plot<2?1:2);
  const mirrored=sourcePlot!==plot;
  const quad=FLOOR_QUADS[plot];
  const polygon=quad.map(p=>p.join(',')).join(' ');
  const clip=`court-${uid}-${plot}`;
  const transform=mirrored?'translate(1448 0) scale(-1 1)':'';
  return `<defs><clipPath id="${clip}"><polygon points="${polygon}"/></clipPath></defs><g clip-path="url(#${clip})"><image href="${imagePath('assets/court-reference.jpg')}" width="1448" height="1086" ${transform?`transform="${transform}"`:''}/></g>`;
}

export function renderBuddies(uid='park') {
  return PARK_BUDDIES.map((placement,index)=>{
    const sprite=BUDDY_SPRITES[placement.sprite];
    const [x,y,width,height]=sprite.bounds;
    const displayHeight=placement.height,displayWidth=displayHeight*width/height;
    const left=placement.foot[0]-displayWidth/2,top=placement.foot[1]-displayHeight;
    const clip=`buddy-${uid}-${index}`;
    // Crop only transparent margins in the SVG viewport. The source PNG pixels
    // remain unchanged; reflect around the visible bounds to keep feet fixed.
    const mirror=placement.mirror?` transform="translate(${2*x+width} 0) scale(-1 1)"`:'';
    return `<g class="park-buddy" data-original-sprite="${placement.sprite}" data-state="${sprite.state}" pointer-events="none"><svg x="${left}" y="${top}" width="${displayWidth}" height="${displayHeight}" viewBox="${sprite.bounds.join(' ')}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${xml(sprite.sourceName)}"><defs><clipPath id="${clip}"><rect x="${x}" y="${y}" width="${width}" height="${height}"/></clipPath></defs><g clip-path="url(#${clip})"><image href="${imagePath(sprite.file)}" width="${sprite.canvas[0]}" height="${sprite.canvas[1]}"${mirror}/></g></svg></g>`;
  }).join('');
}

export function renderPark(positions,options={}) {
  const {interactive=false,uid='park',full=false,background='assets/park-empty.png',names={},customChoice='',sourceMap={}}=options;
  const occupied=new Set(Object.values(positions).map(p=>p.plot));
  const targets=interactive?FLOOR_QUADS.map((quad,plot)=>{
    const cx=quad.reduce((s,p)=>s+p[0],0)/4,cy=(quad[0][1]+quad[2][1])/2;
    return `<g class="plot-target${occupied.has(plot)?' occupied':''}" role="button" tabindex="0" data-plot="${plot}" aria-label="Area ${'ABCD'[plot]}"><polygon points="${quad.map(p=>p.join(',')).join(' ')}"/><text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central">${'ABCD'[plot]}</text></g>`;
  }).join(''):'';
  const items=Object.entries(positions).sort((a,b)=>a[1].plot-b[1].plot).map(([id,p])=>{
    const source=sourceMap[id]||(id==='custom'?customChoice:id);
    if(!source) return '';
    const pose=EQUIPMENT_VIEWS[source]?.views[p.plot];
    if(!pose) return '';
    const box=pieceGeometry(source,p.plot),label=names[id]||id;
    const art=box.court?courtArt(source,p.plot,uid):`<svg x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" viewBox="${pose.bounds.join(' ')}" preserveAspectRatio="none"><image href="${imagePath(EQUIPMENT_VIEWS[source].file)}" width="${EQUIPMENT_VIEWS[source].canvas[0]}" height="${EQUIPMENT_VIEWS[source].canvas[1]}"/></svg>`;
    return `<g class="placed-item" data-piece="${xml(id)}" data-home-x="${box.x}" data-home-y="${box.y}" data-area="${'ABCD'[p.plot]}" ${interactive?`role="button" tabindex="0" aria-label="${xml(label)}. Drag to another area, use arrow keys, or press Delete to remove."`:''}>${interactive?`<rect class="piece-hitbox" fill="none" stroke="none" pointer-events="all" x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}"/>`:''}${art}${interactive?`<g class="remove-piece-svg" data-remove="${xml(id)}" role="button" aria-label="Remove ${xml(label)}"><circle cx="${box.x+box.width-5}" cy="${box.y+15}" r="15"/><text x="${box.x+box.width-5}" y="${box.y+15}" text-anchor="middle" dominant-baseline="central">×</text></g>`:''}</g>`;
  }).join('');
  return `<svg class="park-art" viewBox="${full?'0 0 1448 1086':`${PARK_VIEW.x} ${PARK_VIEW.y} ${PARK_VIEW.width} ${PARK_VIEW.height}`}" preserveAspectRatio="xMidYMid meet" role="${interactive?'group':'img'}" aria-label="A fenced playground with four equipment areas and ten original YY buddy sprites"><image href="${imagePath(background)}" width="1448" height="1086"/>${renderBuddies(uid)}${targets}${items}</svg>`;
}

export function plotAtPoint(x,y) {
  const contains=(point,poly)=>{
    let inside=false;
    for(let i=0,j=poly.length-1;i<poly.length;j=i++){
      const a=poly[i],b=poly[j];
      if(((a[1]>point[1])!==(b[1]>point[1]))&&(point[0]<(b[0]-a[0])*(point[1]-a[1])/(b[1]-a[1])+a[0]))inside=!inside;
    }
    return inside;
  };
  const exact=FLOOR_QUADS.findIndex(q=>contains([x,y],q));
  if(exact>=0)return exact;
  return FLOOR_QUADS.map((q,i)=>({i,d:(q.reduce((s,p)=>s+p[0],0)/4-x)**2+((q[0][1]+q[2][1])/2-y)**2})).sort((a,b)=>a.d-b.d)[0].i;
}
