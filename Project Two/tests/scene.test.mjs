import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {BUDDY_SPRITES,PARK_BUDDIES} from '../buddy-sprites.js';
import {EQUIPMENT_VIEWS} from '../equipment-views.js';
import {EQUIPMENT,CUSTOM_IDS} from '../data.js';
import {FLOOR_QUADS,PARK_VIEW,pieceGeometry,plotAtPoint,renderPark,atlasArt} from '../scene.js';

const lessonIds=['fountain','slide','swing','statue','basketball','soccer'];
const choiceIds=['carousel','icecream-stand','seesaw','merry-go-round','swimming-pool','treehouse','trampoline','picnic-pavilion'];
const allIds=[...lessonIds,...choiceIds];
const areas='ABCD';
const close=(a,b,message)=>assert.ok(Math.abs(a-b)<1e-6,`${message}: ${a} versus ${b}`);

test('path characters are ten unchanged original PNGs in only the approved states',async()=>{
  assert.equal(Object.keys(BUDDY_SPRITES).length,10);
  assert.equal(PARK_BUDDIES.length,10);
  assert.equal(PARK_BUDDIES.filter(p=>p.foot[1]>850).length,2,'Two originals at the entrance');
  for(const [id,sprite] of Object.entries(BUDDY_SPRITES)){
    assert.ok(['Happy','Normal','Surprised'].includes(sprite.state),id+' allowed state');
    const bytes=await readFile(new URL('../'+sprite.file,import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'),sprite.sha256,id+' original bytes');
    assert.deepEqual([bytes.readUInt32BE(16),bytes.readUInt32BE(20)],sprite.canvas);
  }
  const svg=renderPark({}, {uid:'original-check'});
  assert.ok(svg.includes('href="assets/park-empty.png"'));
  assert.ok(!svg.includes('park-buddies-varied'));
  assert.equal((svg.match(/class="park-buddy"/g)||[]).length,10);
  for(const p of PARK_BUDDIES){
    const s=BUDDY_SPRITES[p.sprite],[x,,w,h]=s.bounds;
    assert.ok(svg.includes('href="'+s.file+'"'));
    assert.ok(svg.includes('viewBox="'+s.bounds.join(' ')+'" preserveAspectRatio="xMidYMid meet"'));
    if(p.mirror)assert.ok(svg.includes('transform="translate('+(2*x+w)+' 0) scale(-1 1)"'));
    assert.ok(p.height>0&&h>0);
  }
});

// Cross-sections of the physical floor polygons, independently of the sprite
// placement calculation. The head/roof may rise above the floor; its feet may not.
function floorSpanAtY(polygon,y){
  const intersections=[];
  for(let i=0;i<polygon.length;i++){
    const [ax,ay]=polygon[i], [bx,by]=polygon[(i+1)%polygon.length];
    if(y<Math.min(ay,by)-1e-6||y>Math.max(ay,by)+1e-6)continue;
    if(ay===by){if(Math.abs(y-ay)<1e-6)intersections.push(ax,bx);continue;}
    intersections.push(ax+(bx-ax)*(y-ay)/(by-ay));
  }
  assert.ok(intersections.length>=2,`No floor cross-section at y=${y}`);
  return [Math.min(...intersections),Math.max(...intersections)];
}

function jpegSize(bytes){
  assert.equal(bytes.readUInt16BE(0),0xffd8,'Court reference must be a JPEG');
  let offset=2;
  while(offset<bytes.length){
    assert.equal(bytes[offset++],0xff,'Malformed JPEG marker');
    while(bytes[offset]===0xff)offset++;
    const marker=bytes[offset++];
    if(marker===0xd9||marker===0xda)break;
    if(marker===0x01||(marker>=0xd0&&marker<=0xd7))continue;
    const length=bytes.readUInt16BE(offset);
    if([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker)){
      return [bytes.readUInt16BE(offset+5),bytes.readUInt16BE(offset+3)];
    }
    offset+=length;
  }
  throw new Error('No JPEG frame dimensions found');
}

test('the six lesson items and exactly eight approved choices have prepared artwork',()=>{
  assert.deepEqual(EQUIPMENT.map(item=>item.id),lessonIds);
  assert.deepEqual(CUSTOM_IDS,choiceIds);
  assert.deepEqual(Object.keys(EQUIPMENT_VIEWS).sort(),[...allIds].sort());
  assert.ok(!CUSTOM_IDS.includes('icecream-truck'));
  assert.ok(!CUSTOM_IDS.some(id=>/tennis/.test(id)));
});

test('letterboxed thumbnails clip to one atlas pose without leaking neighboring views',()=>{
  const seen=new Set();
  for(const id of allIds)for(let plot=0;plot<4;plot++){
    const svg=atlasArt(id,plot),bounds=EQUIPMENT_VIEWS[id].views[plot].bounds;
    const clip=svg.match(/<clipPath id="([^"]+)"><rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"\/><\/clipPath>/);
    assert.ok(clip,id+' '+areas[plot]+' explicitly clips the complete pose');
    assert.deepEqual(clip.slice(2).map(Number),bounds);
    assert.ok(svg.includes('clip-path="url(#'+clip[1]+')"'));
    assert.ok(!seen.has(clip[1]),'Each thumbnail has an independent SVG clip identifier');
    seen.add(clip[1]);
  }
});

test('all fourteen atlas files are valid PNGs and their four complete poses fit the actual image',async()=>{
  for(const id of allIds){
    const sheet=EQUIPMENT_VIEWS[id];
    const bytes=await readFile(new URL('../'+sheet.file,import.meta.url));
    assert.deepEqual([...bytes.subarray(0,8)],[137,80,78,71,13,10,26,10],id+' PNG signature');
    assert.equal(bytes.toString('ascii',12,16),'IHDR',id+' PNG header');
    const actualSize=[bytes.readUInt32BE(16),bytes.readUInt32BE(20)];
    assert.deepEqual(sheet.canvas,actualSize,id+' actual file dimensions');
    assert.equal(sheet.views.length,4,id+' four poses');
    assert.deepEqual(sheet.views.map(view=>view.area),[...areas],id+' ordered distinct areas');
    const seen=new Set();
    for(const view of sheet.views){
      const label=id+' '+view.area;
      const [x,y,w,h]=view.bounds;
      assert.equal(view.bounds.length,4,label+' view-box coordinates');
      assert.ok(view.bounds.every(Number.isFinite),label+' finite image bounds');
      assert.ok(x>=0&&y>=0&&w>0&&h>0,label+' positive silhouette');
      assert.ok(x+w<=actualSize[0]&&y+h<=actualSize[1],label+' complete pose inside PNG');
      assert.ok(!seen.has(view.bounds.join(',')),label+' distinct atlas source region');
      seen.add(view.bounds.join(','));
      const [anchorX,anchorY]=view.anchor;
      assert.ok(Number.isFinite(anchorX)&&Number.isFinite(anchorY),label+' finite ground anchor');
      assert.ok(anchorX>=x&&anchorX<=x+w&&anchorY>=y&&anchorY<=y+h,label+' anchor belongs to silhouette box');
    }
  }
});

test('all 56 placements stay visible and put their ground contact wholly inside the intended floor',()=>{
  for(const id of allIds)for(let plot=0;plot<4;plot++){
    const label=id+' '+areas[plot],box=pieceGeometry(id,plot);
    assert.ok([box.x,box.y,box.width,box.height].every(Number.isFinite),label+' finite native geometry');
    assert.ok(box.width>0&&box.height>0,label+' nonzero size');
    assert.ok(box.height<=(plot<2?220:230)+1e-6,label+' height limit');
    assert.ok(box.x>=PARK_VIEW.x&&box.x+box.width<=PARK_VIEW.x+PARK_VIEW.width,label+' visible horizontally');
    assert.ok(box.y>=PARK_VIEW.y&&box.y+box.height<=PARK_VIEW.y+PARK_VIEW.height,label+' visible vertically');
    const baseline=box.y+box.height,quad=FLOOR_QUADS[plot];
    assert.ok(baseline>=Math.min(...quad.map(p=>p[1]))&&baseline<=Math.max(...quad.map(p=>p[1])),label+' contact depth inside plot');
    const [left,right]=floorSpanAtY(quad,baseline);
    if(box.court){
      // A court's hitbox encloses the whole tapered polygon, including a rear
      // corner one pixel wider than its front. Its visible floor is clipped.
      const front=quad.filter(p=>Math.abs(p[1]-baseline)<1e-6);
      assert.equal(front.length,2,label+' two physical front corners');
      assert.ok(front.every(p=>p[0]>=left-1e-6&&p[0]<=right+1e-6),label+' court contact inside floor');
    }else{
      assert.ok(box.x>=left-1e-6&&box.x+box.width<=right+1e-6,label+' grounded width remains inside grass floor');
    }
  }
});

test('each labeled floor uses native source coordinates and receives its own center drop',()=>{
  assert.equal(FLOOR_QUADS.length,4);
  FLOOR_QUADS.forEach((quad,plot)=>{
    assert.equal(quad.length,4);
    for(const point of quad)assert.ok(point.length===2&&point.every(Number.isFinite)&&point[0]>=0&&point[0]<=1448&&point[1]>=0&&point[1]<=1086,'Floor '+areas[plot]+' in source canvas');
    const cx=quad.reduce((sum,p)=>sum+p[0],0)/4,cy=quad.reduce((sum,p)=>sum+p[1],0)/4;
    assert.equal(plotAtPoint(cx,cy),plot,'Center drop goes to '+areas[plot]);
    // Small movements around a target center may not jump to a different plot.
    for(const [dx,dy] of [[-15,-15],[15,-15],[-15,15],[15,15]])assert.equal(plotAtPoint(cx+dx,cy+dy),plot);
  });
});

test('every one of 56 scene placements identifies the chosen equipment and target area',()=>{
  for(const id of allIds)for(let plot=0;plot<4;plot++){
    const svg=renderPark({[id]:{plot}},{interactive:true,uid:'test-'+id+'-'+plot});
    const placed=[...svg.matchAll(/<g\b[^>]*class="placed-item"[^>]*data-piece="([^"]+)"[^>]*data-area="([^"]+)"[^>]*>/g)];
    assert.equal(placed.length,1,id+' has exactly one placed scene item');
    assert.equal(placed[0][1],id);
    assert.equal(placed[0][2],areas[plot]);
    // SVG presentation attributes survive PDF export even when the converter
    // does not apply HTML CSS selectors inside an SVG image.
    const hitboxes=[...svg.matchAll(/<rect\b[^>]*class="piece-hitbox"[^>]*>/g)];
    for(const [rect] of hitboxes)assert.match(rect,/\bfill="(?:none|transparent)"/,id+' hitbox cannot become a black PDF matte');
    assert.equal((svg.match(/class="plot-target(?: occupied)?"/g)||[]).length,4,'Four usable drop targets');
    assert.equal((svg.match(/class="plot-target occupied"/g)||[]).length,1,'One occupied target');
    if(id!=='basketball'&&id!=='soccer'){
      assert.ok(svg.includes('viewBox="'+EQUIPMENT_VIEWS[id].views[plot].bounds.join(' ')+'"'),id+' uses its prepared '+areas[plot]+' pose');
      assert.ok(svg.includes('href="'+EQUIPMENT_VIEWS[id].file+'"'),id+' uses its atlas asset');
    }
  }
});

test('builder and final park viewports preserve the original camera proportions',()=>{
  for(const options of [{interactive:true},{interactive:false},{interactive:false,full:true}]){
    const svg=renderPark({slide:{plot:0},soccer:{plot:3}},options);
    const outer=svg.match(/^<svg\b[^>]+>/)?.[0];
    assert.ok(outer,'Park has an outer SVG viewport');
    assert.match(outer,/\bpreserveAspectRatio="xMidYMid meet"/,'Park must letterbox rather than stretch its native image');
    const expected=options.full?'0 0 1448 1086':`${PARK_VIEW.x} ${PARK_VIEW.y} ${PARK_VIEW.width} ${PARK_VIEW.height}`;
    assert.ok(outer.includes('viewBox="'+expected+'"'),'Native scene coordinates remain unchanged');
  }
});

test('the custom choice resolves to each approved species and keeps the student name escaped',()=>{
  for(const id of choiceIds)for(let plot=0;plot<4;plot++){
    const svg=renderPark({custom:{plot}},{interactive:true,customChoice:id,names:{custom:'Alex & <Friends>'}});
    assert.ok(svg.includes('data-piece="custom"')&&svg.includes('data-area="'+areas[plot]+'"'));
    assert.ok(svg.includes('href="'+EQUIPMENT_VIEWS[id].file+'"'),id+' custom asset');
    assert.ok(svg.includes('Alex &amp; &lt;Friends&gt;'),'Student names remain plain display text');
    assert.ok(!svg.includes('<Friends>'));
  }
});

test('court placement uses the native reference dimensions and clips the surface to each target floor',async()=>{
  const courtBytes=await readFile(new URL('../assets/court-reference.jpg',import.meta.url));
  assert.deepEqual(jpegSize(courtBytes),[1448,1086]);
  for(const id of ['basketball','soccer'])for(let plot=0;plot<4;plot++){
    const svg=renderPark({[id]:{plot}},{uid:'court-check-'+id+'-'+plot});
    assert.ok(svg.includes('href="assets/court-reference.jpg" width="1448" height="1086"'),'Native reference stays unscaled');
    const clips=[...svg.matchAll(/<clipPath\b[^>]*><polygon points="([^"]+)"\/><\/clipPath>/g)];
    assert.equal(clips.length,1);
    const points=clips[0][1].split(' ').map(pair=>pair.split(',').map(Number));
    assert.deepEqual(points,FLOOR_QUADS[plot],id+' court surface cannot paint outside '+areas[plot]);
    const box=pieceGeometry(id,plot),floor=FLOOR_QUADS[plot];
    close(box.y+box.height,Math.max(...floor.map(p=>p[1])),id+' front ground edge');
    assert.equal(box.court,true);
  }
});
