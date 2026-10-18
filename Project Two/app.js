import {EQUIPMENT, CUSTOM_IDS, INTRO, STORIES, FINAL_DESCRIPTION, FINAL_LABELS, PLOTS} from './data.js';
import {equivalentAnswer, equipmentTotals} from './math-engine.js';
import {canVisit, nextPageAllowed} from './progression.js';
import {EQUIPMENT_VIEWS} from './equipment-views.js';
import {atlasArt, renderPark, imagePath, PARK_VIEW, plotAtPoint} from './scene.js';

const query = new URLSearchParams(location.search);
const KEY = 'truepbl-playground-final-v5-student'+(query.has('qa')?'-qa':'');
const variant = 'immersive';
document.body.dataset.variant = variant;
document.title = `Design Your Playground! · ${variant === 'original' ? 'Original layout' : variant === 'immersive' ? 'Text on image' : 'Text beside image'}`;
const stage = document.querySelector('#stage');
const viewport = document.querySelector('#viewport');
const nav = document.querySelector('#page-numbers');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const announcement = document.querySelector('#announcement');
const freshState = () => ({version:2,page:0,answers:{},scratch:{},checked:{},customChoice:'',customName:'',selected:[],positions:{},finalWork:{}});
const state = restore();
let draggedId = null;
let activePointer = null;
let pendingBuild = null;

function escape(value='') { return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function expression(value) { return escape(value).replace(/-/g,'−').replace(/([+−])/g,' $1 '); }
function unit(squared=false) { return `yd${squared ? '<sup>2</sup>' : ''}`; }
function measure(value) { return `<span class="measure-value">${expression(value)}</span><span class="measure-unit">yd</span>`; }
// All fourteen approved species use their prepared atlas, including thumbnails.
function boundedArt(id,className,alt) { return atlasArt(id,2,className,alt); }
function checked(key) { const c=state.checked[key]; return c?.value===state.answers[key] ? c : null; }
function restore() {
  const clean=freshState();
  try {
    const data=JSON.parse(localStorage.getItem(KEY));
    if (!data || data.version!==2) return clean;
    for (const key of ['customName']) if(typeof data[key]==='string') clean[key]=data[key].slice(0,80);
    if(CUSTOM_IDS.includes(data.customChoice)) clean.customChoice=data.customChoice;
    for(const group of ['answers','scratch','finalWork']) if(data[group] && typeof data[group]==='object') for(const [key,value] of Object.entries(data[group])) if(typeof value==='string') clean[group][key]=value.slice(0,512);
    for(const [key,value] of Object.entries(data.checked||{})) if(value && typeof value.value==='string' && typeof value.correct==='boolean') clean.checked[key]={value:value.value,correct:value.correct,message:typeof value.message==='string'?value.message:''};
    clean.selected=Array.isArray(data.selected)?[...new Set(data.selected.filter(id=>EQUIPMENT.some(e=>e.id===id)))].slice(0,3):[];
    const allowed=[...clean.selected,'custom'];
    for(const [id,p] of Object.entries(data.positions||{})) if(allowed.includes(id)&&p&&Number.isInteger(p.plot)&&p.plot>=0&&p.plot<4) clean.positions[id]={...PLOTS[p.plot],plot:p.plot};
    if(Number.isInteger(data.page)&&data.page>=0&&data.page<14) clean.page=data.page;
    while(clean.page>0 && !canVisit(clean.page,clean)) clean.page--;
  } catch {}
  return clean;
}
function save() { try {localStorage.setItem(KEY,JSON.stringify(state));} catch {} }
function say(text) { announcement.textContent=''; requestAnimationFrame(()=>announcement.textContent=text); }
function fit() {
  const width=Math.min(window.innerWidth-24,(window.innerHeight-100)*16/9,1600);
  const scale=Math.max(.12,width/1600);
  stage.style.transform=`scale(${scale})`;
  viewport.style.width=`${1600*scale}px`;
  viewport.style.height=`${900*scale}px`;
}
function navigate(page) {
  if(page<0||page>13||!canVisit(page,state)) return;
  state.page=page; save(); render();
  stage.focus({preventScroll:true});
}
function updateNavigation() {
  previous.disabled=state.page===0;
  next.disabled=!nextPageAllowed(state);
  next.hidden=false;
  nav.innerHTML=Array.from({length:14},(_,i)=>`<button type="button" class="page-number${state.page===i?' current':''}" data-page="${i}" aria-label="Page ${i+1}" ${state.page===i?'aria-current="page"':''} ${canVisit(i,state)?'':'disabled'}>${i+1}</button>`).join('');
  document.querySelectorAll('[data-view]').forEach(link=>{
    const selected=link.dataset.view===variant;
    link.setAttribute('aria-current',selected?'true':'false');
    link.href=`?view=${link.dataset.view}`;
  });
}
function hint(content) {
  return `<div class="hint"><button type="button" class="hint-trigger" aria-label="Hint" aria-describedby="hint-content" aria-expanded="false"><span aria-hidden="true">☝</span></button><div id="hint-content" role="tooltip" class="hint-popover">${content}</div></div>`;
}
function parkScene({final=false}={}) {
  const names=Object.fromEntries(EQUIPMENT.map(e=>[e.id,e.name])); names.custom=state.customName;
  return `<div class="builder-scene${final?' frozen-scene':''}" ${!final?'data-build-scene="true"':''}>${renderPark(state.positions,{interactive:!final,uid:'page-'+state.page,names,customChoice:state.customChoice})}</div>`;
}
function renderIntro() {
  return `<section class="slide page-intro"><div class="intro-scene"><img class="scene-background" src="${imagePath('assets/cover-playground.jpg')}" alt="A lively playground with basketball, soccer, a slide, a carousel and ten YY buddies in varied outfits and expressions"></div><div class="intro-copy"><h1>${INTRO.title}</h1><div class="description"><strong>Description:</strong><p>${INTRO.description}</p></div><div class="standards"><strong>Standards:</strong><span>7.EE-1</span><span>7.EE-3</span></div></div></section>`;
}
function renderStory() {
  const page=state.page,paragraphs=STORIES[page];
  const expressionName=page===1?'normal':page===8?'happy':'surprised';
  return `<section class="slide page-story story-${page+1}"><div class="story-scene"><img class="scene-background" src="${imagePath('assets/office-'+expressionName+'-pixel.png')}" alt="The school building manager, ${expressionName}, sitting behind the office desk"></div><div class="story-copy">${paragraphs.map((p,i)=>page===11&&i===0?`<h1 class="speech-bubble">${p}</h1>`:`<p class="speech-bubble">${escape(p)}</p>`).join('')}</div></section>`;
}
function diagram(e) {
  const file=e.id==='custom'?state.customChoice:e.id;
  return `<div class="equipment-panel" style="--equipment-color:${e.color||'#d3e8c0'}"><h1>${escape(e.name)}</h1><div class="equipment-diagram equipment-${e.id}">${boundedArt(file,'equipment-image',e.name)}<div class="dimension width">${measure(e.width)}</div><div class="dimension height">${measure(e.height)}</div></div></div>`;
}
function question(e,type) {
  const key=`${e.id}-${type}`;
  const perimeter=type==='perimeter';
  const count=perimeter?4:2;
  const status=checked(key);
  return `<section class="question ${type}"><h2>What is the <strong><u>${type}</u></strong> of this block?</h2><p class="scaffold">${perimeter?'Add the four sides.':'Multiply length and width.'}</p><div class="scratch-row">${Array.from({length:count},(_,i)=>`${i?`<span aria-hidden="true">${perimeter?'+':'×'}</span>`:''}<input type="text" data-scratch="${key}-${i}" value="${escape(state.scratch[`${key}-${i}`]||'')}" aria-label="${perimeter?'Side':'Factor'} ${i+1} scratch work" autocomplete="off">`).join('')}</div><div class="answer-row"><span aria-hidden="true">=</span><input id="${key}" type="text" class="answer-input${status?(status.correct?' correct':' incorrect'):''}" data-answer="${key}" value="${escape(state.answers[key]||'')}" placeholder="Your simplified expression" aria-label="${type} answer" aria-describedby="${key}-feedback" autocomplete="off" spellcheck="false"><span class="unit">${unit(!perimeter)}</span></div><p id="${key}-feedback" class="answer-feedback ${status?.correct?'correct':''}" role="status">${status?escape(status.message):''}</p></section>`;
}
function renderMath() {
  const custom=state.page===10;
  const e=custom?{id:'custom',name:state.customName,width:'23',height:'2x+3y',perimeter:'4x+6y+46',area:'46x+69y',color:'#cfe6ba'}:EQUIPMENT[state.page-2];
  const side=custom?'right':state.page%2===0?'left':'right';
  const hintCopy=custom?'<strong>For example:</strong><br>Length = 2x + 1 yd, width = 7 yd<br>Perimeter = 2[(2x + 1) + 7] = 4x + 16 yd<br>Area = 7(2x + 1) = 14x + 7 yd²':`<strong>Perimeter</strong><br>${expression(e.width)} + (${expression(e.height)}) + ${expression(e.width)} + (${expression(e.height)}) = ${expression(e.perimeter)} yd<br><br><strong>Area</strong><br>(${expression(e.width)}) × (${expression(e.height)}) = ${expression(e.area)} yd²`;
  return `<section class="slide page-math">${hint(hintCopy)}<div class="math-layout equipment-${side}">${diagram(e)}<div class="worksheet">${question(e,'perimeter')}${question(e,'area')}<button type="button" class="check-button" data-check="${e.id}">Check my answer</button></div></div></section>`;
}
function renderChoice() {
  return `<section class="slide page-choice"><h1 class="choice-title">Now name your own block!</h1><div class="choice-workspace"><div class="custom-slot" data-custom-slot="true">${state.customChoice?boundedArt(state.customChoice,'slot-art','Your chosen equipment'):''}</div><div class="custom-name"><p class="choice-instruction">Choose equipment for your playground. Drag or tap a picture below, then name your block here.</p><label for="custom-name">Name:</label><input type="text" id="custom-name" maxlength="80" value="${escape(state.customName)}" autocomplete="off"></div></div><div class="choice-tray" role="group" aria-label="Choose one picture">${CUSTOM_IDS.map((id,i)=>`<button type="button" class="choice-option${state.customChoice===id?' selected':''}" data-choice="${id}" draggable="true" aria-label="Choose picture ${i+1}" aria-pressed="${state.customChoice===id}">${boundedArt(id,'thumbnail-art','')}</button>`).join('')}</div></section>`;
}
function renderBuilder() {
  const all=[...EQUIPMENT,{id:'custom',name:state.customName}];
  return `<section class="slide page-builder">${parkScene()}<div class="builder-instructions"><p>Drag or tap any 3 equipments into the playground.</p><p>Then, place the picture of your own equipment in the playground too!</p></div><div class="builder-tray" role="group" aria-label="Choose three equipments plus your own">${all.map(e=>`<button type="button" class="builder-option${state.positions[e.id]?' selected':''}" data-build="${e.id}" draggable="true" aria-label="${escape(e.name)}" aria-pressed="${!!state.positions[e.id]}" ${e.id!=='custom'&&state.selected.length===3&&!state.selected.includes(e.id)?'disabled':''}>${boundedArt(e.id==='custom'?state.customChoice:e.id,'thumbnail-art','')}<span>${escape(e.name)}</span></button>`).join('')}</div></section>`;
}
function finalQuestion(label,id) {
  const key=`final-${id}`;
  const status=checked(key);
  return `<section class="final-question"><label for="work-${id}">${label}</label><textarea class="final-work" id="work-${id}" data-work="${id}" aria-label="${label}" rows="1">${escape(state.finalWork[id]||'')}</textarea><div class="answer-row"><input type="text" class="answer-input${status?(status.correct?' correct':' incorrect'):''}" data-answer="${key}" value="${escape(state.answers[key]||'')}" aria-label="${label.replace(': (Show work)','')} answer" aria-describedby="${key}-feedback" placeholder="Your simplified expression" autocomplete="off" spellcheck="false"><span class="unit">${unit(true)}</span></div><p id="${key}-feedback" class="answer-feedback ${status?.correct?'correct':''}" role="status">${status?escape(status.message):''}</p></section>`;
}
function renderFinal() {
  const rows=state.selected.map(id=>EQUIPMENT.find(e=>e.id===id));
  rows.push({id:'custom',name:state.customName,width:'23',height:'2x+3y'});
  return `<section class="slide page-final">${hint('<strong>Area = length × width</strong><br>Find the area of the whole playground.<br>Add the areas of your four equipment blocks.<br>Subtract the total equipment area from the playground area.')}<div class="final-layout"><div class="final-visual"><div class="final-park"><div class="dimension width">${measure('x+32')}</div>${parkScene({final:true})}<div class="dimension height">${measure('400')}</div></div><table class="dimensions-table"><thead><tr><th scope="col">Equipment</th><th scope="col">Length (yd)</th><th scope="col">Width (yd)</th></tr></thead><tbody>${rows.map(e=>`<tr><th scope="row">${boundedArt(e.id==='custom'?state.customChoice:e.id,'thumbnail-art','')}${escape(e.name)}</th><td>${expression(e.width)}</td><td>${expression(e.height)}</td></tr>`).join('')}</tbody></table></div><div class="final-worksheet"><p class="final-intro">${FINAL_DESCRIPTION}</p>${FINAL_LABELS.map((label,i)=>finalQuestion(label,['playground','total','grass'][i])).join('')}<button type="button" class="check-button" data-check="final">Check my answer</button></div></div></section>`;
}
function render() {
  stage.innerHTML=state.page===0?renderIntro():STORIES[state.page]?renderStory():state.page===9?renderChoice():state.page===12?renderBuilder():state.page===13?renderFinal():renderMath();
  stage.setAttribute('aria-label',`Page ${state.page+1}`);
  updateNavigation(); fit(); fitAnswerInputs();
}
function checkAnswers(id) {
  let expected;
  if(id==='final') {
    const totals=equipmentTotals(state.selected);
    expected={playground:totals.playground,total:totals.equipment,grass:totals.grass};
  } else {
    const e=id==='custom'?{perimeter:'4x+6y+46',area:'46x+69y'}:EQUIPMENT.find(e=>e.id===id);
    expected={perimeter:e.perimeter,area:e.area};
  }
  let allCorrect=true;
  for(const [type,answer] of Object.entries(expected)) {
    const key=`${id}-${type}`,value=state.answers[key]||'';
    const correct=equivalentAnswer(value,answer).correct;
    allCorrect&&=correct;
    state.checked[key]={value,correct,message:correct?'Correct!':'Try again.'};
  }
  save(); render();
  say(allCorrect?'Correct!': 'Try again.');
  if(!allCorrect) stage.querySelector('.answer-input.incorrect')?.focus({preventScroll:true});
}
function setCustom(id) {
  if(!CUSTOM_IDS.includes(id)) return;
  state.customChoice=id; save(); render();
}
function unplace(id) {
  delete state.positions[id];
  if(id!=='custom') state.selected=state.selected.filter(i=>i!==id);
  delete state.checked['final-total']; delete state.checked['final-grass'];
  save(); render();
}
function place(id,plot=null) {
  if(id!=='custom'&&!EQUIPMENT.some(e=>e.id===id)) return;
  if(id==='custom'&&!state.customChoice) return;
  if(id!=='custom'&&!state.selected.includes(id)&&state.selected.length>=3) return;
  const current=state.positions[id];
  if(plot===null) plot=[0,1,2,3].find(p=>!Object.values(state.positions).some(pos=>pos.plot===p));
  if(plot===undefined) return;
  const occupying=Object.keys(state.positions).find(other=>other!==id&&state.positions[other].plot===plot);
  if(occupying) {
    if(current) state.positions[occupying]={...PLOTS[current.plot],plot:current.plot};
    else {
      const empty=[0,1,2,3].find(p=>!Object.values(state.positions).some(pos=>pos.plot===p));
      if(empty===undefined) return;
      state.positions[occupying]={...PLOTS[empty],plot:empty};
    }
  }
  state.positions[id]={...PLOTS[plot],plot};
  if(id!=='custom'&&!state.selected.includes(id)) state.selected.push(id);
  delete state.checked['final-total']; delete state.checked['final-grass'];
  save(); render();
}
function scenePoint(event,scene) {
  const r=scene.getBoundingClientRect();
  const scale=Math.min(r.width/PARK_VIEW.width,r.height/PARK_VIEW.height);
  const offsetX=(r.width-PARK_VIEW.width*scale)/2,offsetY=(r.height-PARK_VIEW.height*scale)/2;
  return {x:PARK_VIEW.x+(event.clientX-r.left-offsetX)/scale,y:PARK_VIEW.y+(event.clientY-r.top-offsetY)/scale};
}
function nearestPlot(event,scene) {const p=scenePoint(event,scene);return plotAtPoint(p.x,p.y);}
function fitAnswerInput(input) {
  if(!input.matches('.answer-input'))return;
  const base=state.page===13?28:33;
  const c=document.createElement('canvas').getContext('2d');
  const style=getComputedStyle(input);c.font=style.fontStyle+' '+style.fontWeight+' '+base+'px '+style.fontFamily;
  const width=c.measureText(input.value||'').width;
  const available=input.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight)-3;
  input.style.fontSize=Math.min(base,Math.max(1,base*available/Math.max(1,width)))+'px';
}
function fitAnswerInputs(){stage.querySelectorAll('.answer-input').forEach(fitAnswerInput);}

previous.addEventListener('click',()=>navigate(state.page-1));
next.addEventListener('click',()=>navigate(state.page+1));
nav.addEventListener('click',event=>{const button=event.target.closest('[data-page]');if(button) navigate(Number(button.dataset.page));});
stage.addEventListener('click',event=>{
  const choice=event.target.closest('[data-choice]'); if(choice) return setCustom(choice.dataset.choice);
  const build=event.target.closest('[data-build]'); if(build){pendingBuild=build.dataset.build;if(!state.positions[pendingBuild])place(pendingBuild);return;}
  const plot=event.target.closest('[data-plot]');if(plot&&pendingBuild){place(pendingBuild,Number(plot.dataset.plot));return;}
  const remove=event.target.closest('[data-remove]'); if(remove) return unplace(remove.dataset.remove);
  const check=event.target.closest('[data-check]'); if(check) return checkAnswers(check.dataset.check);
  const hand=event.target.closest('.hint-trigger'); if(hand) {const box=hand.closest('.hint'),expanded=box.classList.contains('open');hand.setAttribute('aria-expanded',String(!expanded));box.classList.toggle('open',!expanded);box.classList.toggle('dismissed',expanded);}
});
stage.addEventListener('input',event=>{
  const el=event.target;
  if(el.dataset.answer) {
    state.answers[el.dataset.answer]=el.value;
    delete state.checked[el.dataset.answer];
    el.classList.remove('correct','incorrect');
    const feedback=document.getElementById(`${el.dataset.answer}-feedback`); if(feedback) feedback.textContent='';
  }
  if(el.dataset.scratch) state.scratch[el.dataset.scratch]=el.value;
  if(el.dataset.work) state.finalWork[el.dataset.work]=el.value;
  if(el.id==='custom-name') state.customName=el.value;
  save(); updateNavigation(); fitAnswerInput(el);
});
stage.addEventListener('keydown',event=>{
  const area=event.target.closest('[data-plot]');if(area&&pendingBuild&&(event.key==='Enter'||event.key===' ')){event.preventDefault();place(pendingBuild,Number(area.dataset.plot));return;}
  const piece=event.target.closest('[data-piece]');
  if(piece) {
    const id=piece.dataset.piece,plot=state.positions[id].plot;
    const direction={ArrowLeft:plot%2?plot-1:plot,ArrowRight:plot%2?plot:plot+1,ArrowUp:plot>=2?plot-2:plot,ArrowDown:plot<2?plot+2:plot};
    if(event.key in direction) {event.preventDefault();place(id,direction[event.key]);stage.querySelector(`[data-piece="${id}"]`)?.focus();}
    if(event.key==='Delete'||event.key==='Backspace') {event.preventDefault();unplace(id);}
  }
  if(event.key==='Escape') stage.querySelectorAll('.hint').forEach(h=>{h.classList.remove('open');h.classList.add('dismissed');h.querySelector('button').setAttribute('aria-expanded','false');});
});
stage.addEventListener('pointerover',event=>{const h=event.target.closest('.hint');if(h&&!h.contains(event.relatedTarget)){h.classList.remove('dismissed');h.querySelector('button').setAttribute('aria-expanded','true');}});
stage.addEventListener('pointerout',event=>{const h=event.target.closest('.hint');if(h&&!h.contains(event.relatedTarget)){h.classList.remove('open');h.classList.add('dismissed');h.querySelector('button').setAttribute('aria-expanded','false');}});
stage.addEventListener('focusin',event=>{const h=event.target.closest('.hint');if(h){h.classList.remove('dismissed');h.querySelector('button').setAttribute('aria-expanded','true');}});
stage.addEventListener('focusout',event=>{const h=event.target.closest('.hint');if(h&&!h.contains(event.relatedTarget)){h.classList.remove('open');h.classList.add('dismissed');h.querySelector('button').setAttribute('aria-expanded','false');}});
stage.addEventListener('dragstart',event=>{
  const el=event.target.closest('[data-choice],[data-build]');
  if(!el) return;
  draggedId=el.dataset.choice||el.dataset.build;
  event.dataTransfer.setData('text/plain',draggedId); event.dataTransfer.effectAllowed='copy';
});
stage.addEventListener('dragover',event=>{if(event.target.closest('[data-custom-slot],[data-build-scene]')){event.preventDefault();event.dataTransfer.dropEffect='copy';}});
stage.addEventListener('drop',event=>{
  const slot=event.target.closest('[data-custom-slot]'),scene=event.target.closest('[data-build-scene]');
  if(!slot&&!scene) return;
  event.preventDefault();const id=draggedId||event.dataTransfer.getData('text/plain');
  if(slot) setCustom(id); else place(id,nearestPlot(event,scene));
  draggedId=null;
});
stage.addEventListener('pointerdown',event=>{
  const piece=event.target.closest('[data-piece]'); if(!piece||event.target.closest('[data-remove]')) return;
  event.preventDefault();piece.focus({preventScroll:true});piece.setPointerCapture(event.pointerId);
  activePointer={id:piece.dataset.piece,startX:event.clientX,startY:event.clientY,startPoint:scenePoint(event,piece.closest('.builder-scene')),moved:false,piece};
});
stage.addEventListener('pointermove',event=>{
  if(!activePointer) return;
  if(Math.hypot(event.clientX-activePointer.startX,event.clientY-activePointer.startY)>4) activePointer.moved=true;
  if(!activePointer.moved)return;
  const scene=activePointer.piece.closest('.builder-scene'),point=scenePoint(event,scene);
  activePointer.piece.setAttribute('transform',`translate(${point.x-activePointer.startPoint.x} ${point.y-activePointer.startPoint.y})`);
});
stage.addEventListener('pointerup',event=>{
  if(!activePointer) return;
  const pointer=activePointer;activePointer=null;
  if(pointer.moved) place(pointer.id,nearestPlot(event,pointer.piece.closest('.builder-scene')));
});
stage.addEventListener('pointercancel',()=>{activePointer=null;render();});
window.addEventListener('resize',fit);
// Comparing styles in separate tabs keeps answers/design in sync while each
// tab may remain on its own currently reachable page.
window.addEventListener('storage',event=>{
  if(event.key!==KEY) return;
  const page=state.page;
  Object.assign(state,restore());
  if(canVisit(page,state)) state.page=page;
  render();
});
render();
