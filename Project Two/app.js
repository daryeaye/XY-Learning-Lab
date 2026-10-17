import {EQUIPMENT, CUSTOM_IDS, INTRO, STORIES, FINAL_DESCRIPTION, FINAL_LABELS, PLOTS, asset} from './data.js';
import {equivalentAnswer, equipmentTotals} from './math-engine.js';
import {canVisit, nextPageAllowed} from './progression.js';

const KEY = 'truepbl-playground-redesign-v2-release';
const query = new URLSearchParams(location.search);
const variant = ['original','immersive','split'].includes(query.get('view')) ? query.get('view') : 'original';
document.body.dataset.variant = variant;
document.title = `Design Your Playground! · ${variant === 'original' ? 'Original layout' : variant === 'immersive' ? 'Text on image' : 'Text beside image'}`;
const stage = document.querySelector('#stage');
const viewport = document.querySelector('#viewport');
const nav = document.querySelector('#page-numbers');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const announcement = document.querySelector('#announcement');
const freshState = () => ({version:2,page:0,answers:{},scratch:{},checked:{},customChoice:'',customName:'',learnerName:'',selected:[],positions:{},finalWork:{}});
const state = restore();
let draggedId = null;
let activePointer = null;

function escape(value='') { return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function expression(value) { return escape(value).replace(/-/g,'−').replace(/([+−])/g,' $1 '); }
function unit(squared=false) { return `yd${squared ? '<sup>2</sup>' : ''}`; }
// Display transparent source assets by their artwork bounds; the original PNGs
// remain intact. This prevents wide courts and the professor from looking tiny.
const ART_BOUNDS = {
  fountain:[122,166,1009,923],slide:[122,241,1010,773],swing:[122,437,1009,380],
  statue:[419,123,416,1009],basketball:[122,439,1010,376],soccer:[123,472,1009,311],
  'boss-normal':[236,144,833,1067],'boss-happy':[24,50,1186,1159],'boss-surprised':[238,84,830,1126],
};
function boundedArt(id,className,alt,alignment='xMidYMid meet') {
  const bounds=ART_BOUNDS[id];
  if(!bounds) return `<img class="${className}" src="${asset(id)}" alt="${escape(alt)}">`;
  return `<svg class="${className}" viewBox="${bounds.join(' ')}" role="img" aria-label="${escape(alt)}" preserveAspectRatio="${alignment}"><image href="${asset(id)}" width="1254" height="1254"/></svg>`;
}
function checked(key) { const c=state.checked[key]; return c?.value===state.answers[key] ? c : null; }
function restore() {
  const clean=freshState();
  try {
    const data=JSON.parse(localStorage.getItem(KEY));
    if (!data || data.version!==2) return clean;
    for (const key of ['customName','learnerName']) if(typeof data[key]==='string') clean[key]=data[key].slice(0,80);
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
function parkScene({intro=false,final=false}={}) {
  const positions=intro ? {fountain:{...PLOTS[0],y:47,plot:0},swing:{...PLOTS[1],y:47,plot:1},slide:{...PLOTS[2],plot:2},carousel:{...PLOTS[3],plot:3}} : state.positions;
  return `<div class="${intro?'intro-scene':'builder-scene'}${final?' frozen-scene':''}" ${!intro&&!final?'data-build-scene="true"':''}><svg class="scene-background" viewBox="0 90 1672 710" preserveAspectRatio="none" role="img" aria-label="A fenced playground with four open plots and connecting paths"><image href="assets/park-four-plots.png" width="1672" height="941"/></svg>${Object.entries(positions).map(([id,p])=>{
    const source=id==='custom'?state.customChoice:id;
    const name=id==='custom'?state.customName:EQUIPMENT.find(e=>e.id===id)?.name||'';
    return intro ? `<img class="intro-equipment intro-${id}" style="left:${p.x}%;top:${p.y}%" src="${asset(source)}" alt="">` : `<${final?'div':'button'} class="placed-equipment equipment-${id}" style="left:${p.x}%;top:${p.y}%" ${!final?`type="button" data-piece="${id}" aria-label="${escape(name)}. Drag to another plot, use arrow keys to move, or press Delete to remove."`:''}>${boundedArt(source,'piece-art',name,'xMidYMax meet')}${!final?`<span class="remove-piece" data-remove="${id}" aria-label="Remove">×</span>`:''}</${final?'div':'button'}>`;
  }).join('')}</div>`;
}
function renderIntro() {
  return `<section class="slide page-intro">${parkScene({intro:true})}<div class="intro-copy"><h1>${INTRO.title}</h1><div class="description"><strong>Description:</strong><p>${INTRO.description}</p></div><div class="standards"><strong>Standards:</strong><span>7.EE-1</span><span>7.EE-3</span></div></div></section>`;
}
function renderStory() {
  const page=state.page;
  const paragraphs=STORIES[page];
  const scene=page===8?'park-four-plots':'office-v2';
  const professor=page===1?'normal':page===8?'happy':'surprised';
  return `<section class="slide page-story story-${page+1}"><div class="story-scene"><img class="scene-background" src="assets/${scene}.png" alt="${page===8?'An empty fenced playground':'A colorful office'}">${boundedArt(`boss-${professor}`,'story-professor','The school building manager')}</div><div class="story-copy">${paragraphs.map((p,i)=>page===11&&i===0?`<h1 class="speech-bubble">${p}</h1>`:`<p class="speech-bubble">${escape(p)}</p>`).join('')}</div></section>`;
}
function diagram(e) {
  const file=e.id==='custom'?state.customChoice:e.id;
  return `<div class="equipment-panel" style="--equipment-color:${e.color||'#d3e8c0'}"><h1>${escape(e.name)}</h1><div class="equipment-diagram equipment-${e.id}">${boundedArt(file,'equipment-image',e.name)}<div class="dimension width">${expression(e.width)} ${unit()}</div><div class="dimension height">${expression(e.height)} ${unit()}</div></div></div>`;
}
function question(e,type) {
  const key=`${e.id}-${type}`;
  const perimeter=type==='perimeter';
  const count=perimeter?4:2;
  const status=checked(key);
  return `<section class="question ${type}"><h2>${e.id==='custom'&&perimeter?'Step 4: ':''}What is the <strong><u>${type}</u></strong> of this block?</h2><p class="scaffold">${perimeter?'Add the four sides.':'Multiply length and width.'}</p><div class="scratch-row">${Array.from({length:count},(_,i)=>`${i?`<span aria-hidden="true">${perimeter?'+':'×'}</span>`:''}<input type="text" data-scratch="${key}-${i}" value="${escape(state.scratch[`${key}-${i}`]||'')}" aria-label="${perimeter?'Side':'Factor'} ${i+1} scratch work" autocomplete="off">`).join('')}</div><div class="answer-row"><span aria-hidden="true">=</span><input id="${key}" type="text" class="answer-input${status?(status.correct?' correct':' incorrect'):''}" data-answer="${key}" value="${escape(state.answers[key]||'')}" placeholder="Your simplified expression" aria-label="${type} answer" aria-describedby="${key}-feedback" autocomplete="off" spellcheck="false"><span class="unit">${unit(!perimeter)}</span></div><p id="${key}-feedback" class="answer-feedback ${status?.correct?'correct':''}" role="status">${status?escape(status.message):''}</p></section>`;
}
function renderMath() {
  const custom=state.page===10;
  const e=custom?{id:'custom',name:state.customName,width:'23',height:'2x+3y',perimeter:'4x+6y+46',area:'46x+69y',color:'#cfe6ba'}:EQUIPMENT[state.page-2];
  const side=custom?'right':state.page%2===0?'left':'right';
  const hintCopy=custom?'<strong>For example:</strong><br>Length = 2x + 1 yd, width = 7 yd<br>Perimeter = 2[(2x + 1) + 7] = 4x + 16 yd<br>Area = 7(2x + 1) = 14x + 7 yd²':`<strong>Perimeter</strong><br>${expression(e.width)} + (${expression(e.height)}) + ${expression(e.width)} + (${expression(e.height)}) = ${expression(e.perimeter)} yd<br><br><strong>Area</strong><br>(${expression(e.width)}) × (${expression(e.height)}) = ${expression(e.area)} yd²`;
  return `<section class="slide page-math">${hint(hintCopy)}<div class="math-layout equipment-${side}">${diagram(e)}<div class="worksheet">${question(e,'perimeter')}${question(e,'area')}<button type="button" class="check-button" data-check="${e.id}">Check my answer</button></div></div></section>`;
}
function renderChoice() {
  return `<section class="slide page-choice"><div class="choice-heading"><p>Step 1: Choose any object/equipment that you want to put in the playground.</p><p>Step 2: Drag or tap a picture below to place it in the green box.</p></div><div class="choice-workspace"><div class="custom-slot" data-custom-slot="true">${state.customChoice?`<img src="${asset(state.customChoice)}" alt="Your chosen equipment">`:'<p>Drag or tap to place your picture from the ones below.</p>'}</div><div class="custom-name"><h2>Step 3: Name you block!</h2><label for="custom-name">Name:</label><input type="text" id="custom-name" maxlength="80" value="${escape(state.customName)}" autocomplete="off"></div></div><div class="choice-tray" role="group" aria-label="Choose one picture">${CUSTOM_IDS.map((id,i)=>`<button type="button" class="choice-option${state.customChoice===id?' selected':''}" data-choice="${id}" draggable="true" aria-label="Choose picture ${i+1}" aria-pressed="${state.customChoice===id}"><img src="${asset(id)}" alt="" draggable="false"></button>`).join('')}</div></section>`;
}
function renderBuilder() {
  const all=[...EQUIPMENT,{id:'custom',name:state.customName}];
  return `<section class="slide page-builder"><div class="builder-title"><input type="text" id="learner-name" aria-label="Put your name" placeholder="Put your name" value="${escape(state.learnerName)}" maxlength="80"><span>’s playground</span></div>${parkScene()}<div class="builder-instructions"><p>Drag or tap any 3 equipments into the playground.</p><p>Then, place the picture of your own equipment in the playground too!</p></div><div class="builder-tray" role="group" aria-label="Choose three equipments plus your own">${all.map(e=>`<button type="button" class="builder-option${state.positions[e.id]?' selected':''}" data-build="${e.id}" draggable="true" aria-label="${escape(e.name)}" aria-pressed="${!!state.positions[e.id]}" ${e.id!=='custom'&&state.selected.length===3&&!state.selected.includes(e.id)?'disabled':''}><img src="${asset(e.id==='custom'?state.customChoice:e.id)}" alt="" draggable="false"><span>${escape(e.name)}</span></button>`).join('')}</div></section>`;
}
function finalQuestion(label,id) {
  const key=`final-${id}`;
  const status=checked(key);
  return `<section class="final-question"><label for="work-${id}">${label}</label><textarea class="final-work" id="work-${id}" data-work="${id}" aria-label="${label}" rows="1">${escape(state.finalWork[id]||'')}</textarea><div class="answer-row"><input type="text" class="answer-input${status?(status.correct?' correct':' incorrect'):''}" data-answer="${key}" value="${escape(state.answers[key]||'')}" aria-label="${label.replace(': (Show work)','')} answer" aria-describedby="${key}-feedback" placeholder="Your simplified expression" autocomplete="off" spellcheck="false"><span class="unit">${unit(true)}</span></div><p id="${key}-feedback" class="answer-feedback ${status?.correct?'correct':''}" role="status">${status?escape(status.message):''}</p></section>`;
}
function renderFinal() {
  const rows=state.selected.map(id=>EQUIPMENT.find(e=>e.id===id));
  rows.push({id:'custom',name:state.customName,width:'23',height:'2x+3y'});
  return `<section class="slide page-final">${hint('<strong>Area = length × width</strong><br>Find the area of the whole playground.<br>Add the areas of your four equipment blocks.<br>Subtract the total equipment area from the playground area.')}<div class="final-layout"><div class="final-visual"><div class="final-park"><div class="dimension width">x + 32 ${unit()}</div>${parkScene({final:true})}<div class="dimension height">400 ${unit()}</div></div><table class="dimensions-table"><thead><tr><th scope="col">Equipment</th><th scope="col">Length (yd)</th><th scope="col">Width (yd)</th></tr></thead><tbody>${rows.map(e=>`<tr><th scope="row"><img src="${asset(e.id==='custom'?state.customChoice:e.id)}" alt="">${escape(e.name)}</th><td>${expression(e.width)}</td><td>${expression(e.height)}</td></tr>`).join('')}</tbody></table></div><div class="final-worksheet"><p class="final-intro">${FINAL_DESCRIPTION}</p>${FINAL_LABELS.map((label,i)=>finalQuestion(label,['playground','total','grass'][i])).join('')}<button type="button" class="check-button" data-check="final">Check my answer</button></div></div></section>`;
}
function render() {
  stage.innerHTML=state.page===0?renderIntro():STORIES[state.page]?renderStory():state.page===9?renderChoice():state.page===12?renderBuilder():state.page===13?renderFinal():renderMath();
  stage.setAttribute('aria-label',`Page ${state.page+1}`);
  updateNavigation(); fit();
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
function nearestPlot(event,scene) {
  const rect=scene.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width*100,y=(event.clientY-rect.top)/rect.height*100;
  return PLOTS.map((p,i)=>({i,d:(p.x-x)**2+(p.y-y)**2})).sort((a,b)=>a.d-b.d)[0].i;
}

previous.addEventListener('click',()=>navigate(state.page-1));
next.addEventListener('click',()=>navigate(state.page+1));
nav.addEventListener('click',event=>{const button=event.target.closest('[data-page]');if(button) navigate(Number(button.dataset.page));});
stage.addEventListener('click',event=>{
  const choice=event.target.closest('[data-choice]'); if(choice) return setCustom(choice.dataset.choice);
  const build=event.target.closest('[data-build]'); if(build) return state.positions[build.dataset.build]?unplace(build.dataset.build):place(build.dataset.build);
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
  if(el.id==='learner-name') state.learnerName=el.value;
  save(); updateNavigation();
});
stage.addEventListener('keydown',event=>{
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
  activePointer={id:piece.dataset.piece,startX:event.clientX,startY:event.clientY,moved:false,piece};
});
stage.addEventListener('pointermove',event=>{
  if(!activePointer) return;
  if(Math.hypot(event.clientX-activePointer.startX,event.clientY-activePointer.startY)>4) activePointer.moved=true;
  if(!activePointer.moved)return;
  const scene=activePointer.piece.closest('.builder-scene'),rect=scene.getBoundingClientRect();
  activePointer.piece.style.left=`${Math.max(10,Math.min(90,(event.clientX-rect.left)/rect.width*100))}%`;
  activePointer.piece.style.top=`${Math.max(15,Math.min(85,(event.clientY-rect.top)/rect.height*100))}%`;
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
