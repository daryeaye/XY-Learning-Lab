import { equivalentAnswer, equipmentTotals } from './math-engine.js';

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const HELP = 'https://t-pbl.com/xinlindywane/PGA.png';
const FINAL_HELP = 'https://t-pbl.com/xinlindywane/PGB.png';
const STORAGE_KEY = 'truepbl-playground-local-v1';
const equipment = [
  {id:'fountain',name:'Fountain',width:'10',height:'x + 4',perimeter:'2x+28',area:'10x+40',color:'#f9e6d6'},
  {id:'slide',name:'Slide',width:'2x − 5',height:'3',perimeter:'4x-4',area:'6x-15',color:'#f2dce2'},
  {id:'swing',name:'Swing',width:'x + 2',height:'2.5',perimeter:'2x+9',area:'2.5x+5',color:'#e9e2f5'},
  {id:'statue',name:'Statue',width:'2',height:'x − 3',perimeter:'2x-2',area:'2x-6',color:'#f2e8d6'},
  {id:'basketball',name:'Basketball Court',width:'35',height:'2x',perimeter:'4x+70',area:'70x',color:'#dbebdf'},
  {id:'soccer',name:'Mini Soccer Field',width:'4x + 6.4',height:'28.2',perimeter:'8x+69.2',area:'112.8x+180.48',color:'#dfecd0'},
];
const customEquipment = {id:'custom',name:'Your own block',width:'23',height:'2x + 3y',perimeter:'4x+6y+46',area:'46x+69y',color:'#e4eddc'};
const choices = ['carousel','icecream-truck','icecream-stand','merry-go-round','volleyball','seesaw','swing','slide'];
const pageTitles = ['Design Your Playground!','Meet Baby Boss','Fountain','Slide','Swing','Statue','Basketball Court','Mini Soccer Field','Your interview answers','Your very own block','Measure your block','Ready to build?','Your playground','The final stage'];
const chapterPages = [0,2,9,11];
const newState = () => ({version:1,page:0,answers:{},scratch:{},checked:{},customChoice:'',customName:'',learnerName:'',selected:[],positions:{custom:{x:50,y:62}},finalWork:{},reflection:'',visited:[0]});
const allowedEquipment = equipment.map(e=>e.id);
let storageWorking = true;
function restore(candidate) {
  const base = newState();
  if (!candidate || candidate.version !== 1) return base;
  base.page = Number.isInteger(candidate.page) ? Math.max(0,Math.min(13,candidate.page)) : 0;
  const validAnswers=[...equipment,customEquipment].flatMap(e=>[e.id+'-perimeter',e.id+'-area']).concat(['final-playground','final-total','final-grass']);
  const validScratch=[...equipment,customEquipment].flatMap(e=>[...Array.from({length:4},(_,i)=>`${e.id}-p-${i}`),...Array.from({length:2},(_,i)=>`${e.id}-a-${i}`)]);
  for (const [key,allowed,limit] of [['answers',validAnswers,512],['scratch',validScratch,512],['finalWork',['playground','total','grass'],5000]]) {
    const values=candidate[key];
    if(!values||typeof values!=='object'||Array.isArray(values))continue;
    for(const field of allowed) if(typeof values[field]==='string') base[key][field]=values[field].slice(0,limit);
  }
  for (const key of ['customName','learnerName','reflection']) base[key] = String(candidate[key] ?? '').slice(0,key==='reflection'?3000:100);
  base.customChoice = choices.includes(candidate.customChoice) ? candidate.customChoice : '';
  base.selected = [...new Set(Array.isArray(candidate.selected)?candidate.selected:[])].filter(id=>allowedEquipment.includes(id)).slice(0,3);
  base.positions = {};
  for(const id of ['custom',...base.selected]) {
    const pos = candidate.positions?.[id];
    base.positions[id] = {x:Number.isFinite(pos?.x)?Math.max(8,Math.min(92,pos.x)):50,y:Number.isFinite(pos?.y)?Math.max(18,Math.min(82,pos.y)):60};
  }
  base.visited = [...new Set((Array.isArray(candidate.visited)?candidate.visited:[]).filter(n=>Number.isInteger(n)&&n>=0&&n<14).concat(base.page))];
  const totals=base.selected.length===3&&base.customChoice?equipmentTotals(base.selected):null;
  for(const key of validAnswers) {
    if(!candidate.checked?.[key]||candidate.checked[key].value!==base.answers[key])continue;
    const [id,kind]=key.split('-');
    const expected=id==='final'?({'playground':totals?.playground,'total':totals?.equipment,'grass':totals?.grass})[kind]:[...equipment,customEquipment].find(e=>e.id===id)?.[kind];
    if(!expected)continue;
    const result=equivalentAnswer(base.answers[key],expected);
    base.checked[key]={value:base.answers[key],correct:result.correct,message:result.correct?'Your expression matches this block.':'Try again. Check your expression.'};
  }
  return base;
}
let state = newState();
try { const saved=localStorage.getItem(STORAGE_KEY); if(saved) state=restore(JSON.parse(saved)); } catch { storageWorking=false; }
let activePiece = 'custom';
let pendingChoice = '';
let lessonMessage = '';
let dragPayload = '';

function save() {
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); storageWorking=true; }
  catch { storageWorking=false; }
  $('#save-label').textContent = storageWorking ? 'Saved on this device' : 'Use “Save my work” to keep a copy';
}
function getEquipment(id) { return id==='custom' ? {...customEquipment,name:state.customName||'Your own block'} : equipment.find(e=>e.id===id); }
function imageFor(id) { return `assets/${id==='custom'?(state.customChoice||'carousel'):id}.png`; }
function heading(eyebrow,title,description='',help=HELP) {
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h2 tabindex="-1">${escape(title)}</h2>${description?`<p>${description}</p>`:''}</div>${help?`<a class="help-link" href="${help}" target="_blank" rel="noopener">Need help? <span aria-hidden="true">↗</span></a>`:''}</div>`;
}
function setPage(n) {
  state.page=Math.max(0,Math.min(13,n));
  if(!state.visited.includes(state.page)) state.visited.push(state.page);
  lessonMessage=''; pendingChoice=''; save(); render();
  $('#lesson h2')?.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'instant'});
}
function resultInfo(key) {
  const checked = state.checked[key];
  return checked && checked.value === (state.answers[key]||'') ? checked : null;
}
function inputField(id,label,expected,unit='yd',extra='') {
  const result=resultInfo(id);
  const status=result?(result.correct?'correct':'incorrect'):'';
  return `<div class="result-row"><label class="sr-only" for="${id}">${escape(label)}</label><input class="answer ${status}" id="${id}" data-answer="${id}" data-expected="${expected}" autocomplete="off" spellcheck="false" autocapitalize="off" aria-describedby="${id}-feedback" ${result&&!result.correct?'aria-invalid="true"':''} value="${escape(state.answers[id])}" placeholder="Your simplified expression" ${extra}><span class="unit">${unit}</span></div><p id="${id}-feedback" class="field-feedback ${status}" aria-live="polite">${result?escape(result.correct?'✓ Correct! '+result.message:result.message):'Type an expression. Term order and spaces are flexible.'}</p>`;
}
function scratchInputs(id,count) {
  return `<div class="scratch-row">${Array.from({length:count},(_,i)=>`${i?`<span class="operator" aria-hidden="true">${count===4?'+':'×'}</span>`:''}<input class="scratch" data-scratch="${id}-${i}" aria-label="${count===4?'Perimeter side':'Area factor'} ${i+1} scratch work" autocomplete="off" spellcheck="false" value="${escape(state.scratch[`${id}-${i}`])}">`).join('')}<span class="operator" aria-hidden="true">=</span></div>`;
}
function mathWorkspace(e) {
  return `<div class="math-workspace"><section class="math-question"><h3>What is the perimeter of this block?</h3><p class="scratch-label">Add the four sides. <span>Scratch work · not checked</span></p>${scratchInputs(e.id+'-p',4)}${inputField(e.id+'-perimeter',e.name+' perimeter',e.perimeter,'yd')}</section><section class="math-question"><h3>What is the area of this block?</h3><p class="scratch-label">Multiply the length and width. <span>Scratch work · not checked</span></p>${scratchInputs(e.id+'-a',2)}${inputField(e.id+'-area',e.name+' area',e.area,'yd²')}</section><div class="math-actions"><button class="button primary" data-check-pair="${e.id}">Check my answers <span aria-hidden="true">✓</span></button><button class="button quiet" data-hint="${e.id}">A little hint</button></div><div class="hint-box" id="hint-${e.id}" hidden><strong>Try this:</strong> Perimeter = length + width + length + width. Area = length × width. Multiply each term, then combine like terms.</div><div class="feedback-banner" id="pair-feedback" aria-live="polite"></div></div>`;
}
function dimensionCard(e) {
  return `<figure class="dimension-card" style="--equipment-color:${e.color}"><div class="horizontal-dim">(${e.width}) yd</div><div class="equipment-picture"><img src="${imageFor(e.id)}" alt="${escape(e.name)}" draggable="false"><div class="vertical-dim">(${e.height}) yd</div></div><figcaption class="dimension-note">Find the perimeter around the block<br>and the area inside it.</figcaption></figure>`;
}
function cover() {
  return `<section class="cover"><div class="cover-copy"><p class="eyebrow">A TruePBL math adventure</p><h2 tabindex="-1">Design Your<br><em>Playground!</em></h2><p class="lead">A little imagination.<br>A whole lot of possibility.</p><div class="description"><h3>Description:</h3><p>Given the length and width in term of expressions, students will find the perimeter and area of different rectangles by distributive property and skills of simplifying expressions.</p></div><div class="standards"><span>Standards:</span><strong>7.EE-1</strong><strong>7.EE-3</strong></div><button class="button primary" data-goto="1">Let’s begin <span aria-hidden="true">→</span></button></div><div class="cover-art"><img class="hero-image" src="assets/lawn.png" alt="A sunny pixel playground lawn"><img class="hero-equipment hero-fountain" src="assets/fountain.png" alt="" draggable="false"><img class="hero-equipment hero-swing" src="assets/swing.png" alt="" draggable="false"><img class="hero-equipment hero-slide" src="assets/slide.png" alt="" draggable="false"><img class="hero-equipment hero-carousel" src="assets/carousel.png" alt="" draggable="false"><div class="art-caption">Your ideas belong here.</div><span class="pixel-spark spark-one" aria-hidden="true">✦</span><span class="pixel-spark spark-two" aria-hidden="true">✦</span></div></section>`;
}
function bossStory(review=false) {
  if(review) {
    const done=equipment.reduce((n,e)=>n+['perimeter','area'].filter(k=>resultInfo(e.id+'-'+k)?.correct).length,0);
    return `${heading('Interview · the six blocks','Done? Let’s put the answers here!','',null)}<div class="review-intro"><img class="mini-boss" src="assets/boss-${done===12?'happy':'normal'}.png" alt="Baby Boss"><p>Next up, the boss wants to offer you an advantage: how about your very own block in this playground?</p></div><div class="review-grid">${equipment.map((e,i)=>{const p=resultInfo(e.id+'-perimeter'),a=resultInfo(e.id+'-area');return `<article class="review-item"><img src="${imageFor(e.id)}" alt=""><div><h3>${e.name}</h3><p><span class="${p?.correct?'success':'muted'}">${p?.correct?'✓':'○'} Perimeter</span> <span class="${a?.correct?'success':'muted'}">${a?.correct?'✓':'○'} Area</span></p><button class="button quiet small" data-goto="${i+2}">Visit this block</button></div></article>`;}).join('')}</div><div class="review-summary"><strong>${done} of 12 expressions checked</strong><button class="button secondary" id="check-interview">Check all interview answers</button><p id="review-feedback" role="status"></p></div>`;
  }
  return `<section class="story-layout"><div class="story-copy"><p class="eyebrow">A message from Baby Boss</p><h2 tabindex="-1">Hello folks!</h2><div class="story-block"><span class="story-number" aria-hidden="true">01</span><p>The school building manager has a wild idea: he wants to transform our schoolyard into a <mark>temporary playground wonderland</mark> for the holiday season. And guess what? He’s on the hunt for he most epic playground plan from our class!</p></div><div class="story-block"><span class="story-number" aria-hidden="true">02</span><p><strong>Hold on!</strong> He needs to interview you first. The next 6 slides are the <mark>interview questions</mark>. He only hires the person who gets correct answers!</p></div><p class="story-note">Work at your own pace. Baby Boss is here to help you try again.</p></div><div class="office-art"><img class="boss" src="assets/boss-normal.png" alt="Baby Boss, a little professor with round glasses"><span class="boss-name">Baby Boss<br><small>School building manager</small></span></div></section>`;
}
function chooseOwn() {
  return `${heading('Your very own block · choose','Make it your own','',null)}<div class="choice-layout"><div class="choice-copy"><h3>Step 1: Choose any object/equipment that you want to put in the playground.</h3><p>Step 2: Drag the picture of it into the green box. Make sure it is inside the box.</p><p class="tiny-instruction">You can also tap a picture, then tap the green box.</p><h3>Step 3: Name you block!</h3><label class="name-field" for="custom-name">Name:<input id="custom-name" maxlength="100" data-state="customName" value="${escape(state.customName)}" placeholder="Give your idea a name" autocomplete="off"></label></div><div class="choice-panel"><button type="button" class="image-slot ${state.customChoice?'filled':''}" id="custom-slot" aria-label="Place your selected equipment here">${state.customChoice?`<img src="assets/${state.customChoice}.png" alt="Your chosen equipment">`:'<span aria-hidden="true">＋</span><strong>Post the picture here!</strong><small>Drag or tap to place your picture</small>'}</button><p class="choice-status" id="choice-status" role="status">${state.customChoice?'Your picture is ready. Give it a name!':'Choose a picture below. It is yours to name.'}</p></div></div><div class="choice-tray" aria-label="Equipment image choices">${choices.map((id,i)=>`<button class="choice-card ${state.customChoice===id?'chosen':''}" data-choice="${id}" draggable="true" aria-label="Equipment option ${i+1}" aria-pressed="${state.customChoice===id}"><img src="assets/${id}.png" alt="" draggable="false"></button>`).join('')}</div><p class="tray-note">Eight possibilities. One completely original name.</p>`;
}
function ownMath() {
  const e=getEquipment('custom');
  return `${heading('Your very own block · measure',e.name)}${!state.customChoice?'<div class="feedback-banner notice">Choose your picture and give it a name on the previous page. <button class="button quiet small" data-goto="9">Choose my picture</button></div>':''}<p class="custom-math-note">Step 4: What is the perimeter of this block?</p><div class="equipment-layout">${dimensionCard(e)}${mathWorkspace(e)}</div>`;
}
function ready() {
  return `<section class="ready-layout"><div><p class="eyebrow">Interview complete · design begins</p><h2 tabindex="-1">Are you ready to build your own playground?</h2><p>You will put any 3 equipments plus your own equipment in the playground. Then, you will calculate the remaining area of the playground.</p><div class="ready-recipe"><span><strong>3</strong> interview blocks</span><span aria-hidden="true">＋</span><span><strong>1</strong> your own block</span></div><button class="button primary" data-goto="12">Build my playground <span aria-hidden="true">→</span></button></div><img class="boss" src="assets/boss-happy.png" alt="Baby Boss is ready to see your plan"></section>`;
}
function canvasMarkup(final=false) {
  const name=state.learnerName?`${escape(state.learnerName)}’s playground`:'Your playground';
  const pieces=state.customChoice?['custom',...state.selected]:state.selected;
  return `<div class="playground-canvas ${final?'snapshot':'editable-canvas'}" ${final?'':`id="playground-canvas" tabindex="0" role="group" aria-label="Your playground layout. Select a block and use the arrow keys to move it."`}><span class="canvas-label">${name}</span>${pieces.map((id,i)=>{const pos=state.positions[id]||{x:25+(i%2)*45,y:35+Math.floor(i/2)*35};return `<button class="placed-equipment ${!final&&id===activePiece?'selected':''}" style="left:${pos.x}%;top:${pos.y}%" ${final?'tabindex="-1"':`data-piece="${id}" draggable="true"`} aria-label="${escape(getEquipment(id).name)}${final?'':', select then use arrow keys to move'}"><img src="${imageFor(id)}" alt="" draggable="false"></button>`;}).join('')}</div>`;
}
function builder() {
  return `${heading('The playground · arrange your ideas','Your playground','Drag any 3 equipments into the playground. Then, place the picture of your own equipment here too!',null)}<div class="builder-topbar"><label class="name-field" for="learner-name">Put your name<input id="learner-name" data-state="learnerName" maxlength="100" value="${escape(state.learnerName)}" placeholder="Your name" autocomplete="off"></label><p class="selection-count"><strong id="selection-count">${state.selected.length} / 3</strong> interview blocks <span>+ your own block</span></p></div>${!state.customChoice?'<div class="feedback-banner notice">Your own block is still waiting for a picture. <button class="button quiet small" data-goto="9">Choose it here</button></div>':''}${canvasMarkup()}<div class="builder-controls"><p id="builder-status" role="status">${lessonMessage||'Drag a block, or select it below and tap a spot on the lawn. Arrow keys move the selected block.'}</p><button class="button quiet small" id="remove-piece" ${activePiece==='custom'||!state.selected.includes(activePiece)?'disabled':''}>Remove selected block</button><button class="button quiet small" id="arrange-pieces">Arrange neatly</button></div><div class="builder-tray" aria-label="Choose three interview blocks">${equipment.map((e,i)=>`<button class="equipment-card ${state.selected.includes(e.id)?'chosen':''}" draggable="true" data-add-piece="${e.id}" aria-label="${escape(e.name)}, ${state.selected.includes(e.id)?'selected':'add to playground'}" aria-pressed="${state.selected.includes(e.id)}"><span class="card-check" aria-hidden="true">${state.selected.includes(e.id)?'✓':'+'}</span><img src="${imageFor(e.id)}" alt=""><span class="equipment-dims">(${e.width}) × (${e.height}) yd</span></button>`).join('')}</div><p class="tray-note">Choose three different blocks. Your own block comes along automatically.<br>Pictures show your design idea; their display sizes are not to scale.</p>`;
}
function finalStage() {
  let totals=null;
  if(state.selected.length===3&&state.customChoice) totals=equipmentTotals(state.selected);
  const fields=[['playground','Area of this playground: (Show work)',totals?.playground||'400x+12800'],['total','Total area of your equipments: (Show work)',totals?.equipment||''],['grass','Remaining area for the grass: (Show work)',totals?.grass||'']];
  return `${heading('The final stage · make room for grass','Your playground, all together','',FINAL_HELP)}<div class="final-layout"><div class="final-copy"><img class="mini-boss" src="assets/boss-normal.png" alt="Baby Boss"><p>Congratulations on reaching the final stage of the interview process. To your right, you will find the exact measurements of the playground. Your task is to calculate the area that remains uncovered, as this will help you determine how much of the playground needs to be covered with grass.</p></div><figure class="final-preview"><div class="horizontal-dim">(x + 32) yd</div>${canvasMarkup(true)}<figcaption class="final-side-dim">400 yd</figcaption></figure></div>${!totals?'<div class="feedback-banner notice">Choose 3 interview blocks and your own picture to check all three final answers. <button class="button quiet small" data-goto="12">Finish my design</button></div>':''}<div class="final-math">${fields.map(([id,label,expected])=>`<section class="math-question"><h3>${label}</h3><label class="sr-only" for="work-${id}">${label} scratch work</label><textarea id="work-${id}" class="work-field" data-final-work="${id}" placeholder="Show your work here. This space is not checked.">${escape(state.finalWork[id])}</textarea>${inputField('final-'+id,label,expected,'yd²',!expected?'disabled':'')}</section>`).join('')}</div><div class="math-actions"><button class="button primary" id="check-final" ${totals?'':'disabled'}>Check my final answers <span aria-hidden="true">✓</span></button><button class="button secondary" id="print-work">Print my project</button></div><div class="feedback-banner" id="final-feedback" aria-live="polite"></div><details class="reflection"><summary>One more thought…</summary><label for="reflection">What makes your playground a place people would love to visit?</label><textarea id="reflection" data-state="reflection" maxlength="3000" placeholder="Tell Baby Boss about your design.">${escape(state.reflection)}</textarea></details>`;
}
function expectedFor(key) {
  if(key.startsWith('final-')) {
    if(state.selected.length!==3||!state.customChoice) return '';
    const t=equipmentTotals(state.selected);
    return ({'final-playground':t.playground,'final-total':t.equipment,'final-grass':t.grass})[key]||'';
  }
  const [id,kind]=key.split('-');
  return getEquipment(id)?.[kind] || '';
}
function checkOne(key) {
  const expected=expectedFor(key),value=String(state.answers[key]||'');
  if(!expected) return {correct:false,message:'Finish choosing your blocks first.'};
  const result=equivalentAnswer(value,expected);
  let message;
  if(result.correct) message='Your expression matches this block.';
  else if(!value.trim()) message='Add your expression, then try the check again.';
  else if(result.error) message='Check the notation: '+result.error;
  else if(key.endsWith('perimeter')) message='Try again. Count all four sides, then combine like terms.';
  else if(key==='final-total') message='Try again. Add the areas of your 3 chosen blocks and your own block.';
  else if(key==='final-grass') message='Try again. Subtract your total equipment area from the playground area.';
  else message='Try again. Multiply each term, then combine like terms.';
  state.checked[key]={value,correct:result.correct,message};
  return state.checked[key];
}
function checkPair(id) {
  const p=checkOne(id+'-perimeter'),a=checkOne(id+'-area'); save(); render();
  const target=$('#pair-feedback');
  if(target) { target.className='feedback-banner '+(p.correct&&a.correct?'success':'notice'); target.innerHTML=`<img class="feedback-boss" src="assets/boss-${p.correct&&a.correct?'happy':'surprised'}.png" alt="Baby Boss"><p><strong>${p.correct&&a.correct?'Both answers are correct!':'Keep going. You can try again.'}</strong><br>${p.correct&&a.correct?'Baby Boss is ready for your next idea.':'Use your scratch work, or open a little hint.'}</p>`; }
}
function render() {
  const page=state.page;
  const chapter=page<2?0:page<9?1:page<11?2:3;
  $$('.chapter').forEach((b,i)=>{b.classList.toggle('active',i===chapter);b.classList.toggle('complete',i<chapter);if(i===chapter)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
  $$('.step').forEach((b,i)=>{b.classList.toggle('active',i===page);b.classList.toggle('complete',state.visited.includes(i)&&i!==page);b.setAttribute('aria-label',`Page ${i+1}: ${pageTitles[i]}`);b.title=pageTitles[i];if(i===page)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
  $('#page-label').textContent=`${String(page+1).padStart(2,'0')} / 14 · ${pageTitles[page]}`;
  $('#previous').disabled=page===0;
  $('#next').textContent=page===13?'Back to my design ↶':'Next page →';
  const content = page===0?cover():page===1?bossStory():page>=2&&page<=7?`${heading(`Interview · ${page-1} of 6`,equipment[page-2].name)}<div class="equipment-layout ${page%2?'picture-right':''}">${dimensionCard(equipment[page-2])}${mathWorkspace(equipment[page-2])}</div>`:page===8?bossStory(true):page===9?chooseOwn():page===10?ownMath():page===11?ready():page===12?builder():finalStage();
  $('#lesson').innerHTML=content;
  $('#lesson').className='lesson-card page-'+page;
  save(); bindLesson();
}

function next() {
  if(state.page===13) { setPage(12); return; }
  if(state.page===9&&(!state.customChoice||!state.customName.trim())) {
    $('#choice-status').textContent=!state.customChoice?'Choose a picture and place it in the green box first.':'Give your block a name before the next page.';
    (!state.customChoice?$('#custom-slot'):$('#custom-name')).focus(); return;
  }
  if(state.page===12&&(state.selected.length!==3||!state.customChoice)) {
    $('#builder-status').textContent=!state.customChoice?'Choose your own block picture on page 10 first.':'Add '+(3-state.selected.length)+' more interview '+(state.selected.length===2?'block':'blocks')+' before the final stage.'; return;
  }
  setPage(state.page+1);
}
function placeChoice(id) {
  if(!choices.includes(id)) return;
  state.customChoice=id; pendingChoice=''; save(); render();
  $('#custom-slot').focus({preventScroll:true});
}
function clearFinalChecks() { for(const k of ['final-total','final-grass']) delete state.checked[k]; }
function addPiece(id,pos) {
  if(id!=='custom'&&!allowedEquipment.includes(id)) return;
  if(id==='custom'&&!state.customChoice) {lessonMessage='Choose your own equipment on page 10 first.';render();return;}
  if(id!=='custom'&&!state.selected.includes(id)) {
    if(state.selected.length===3){lessonMessage='You have 3 interview blocks. Select one and remove it to choose another.';render();return;}
    state.selected.push(id); clearFinalChecks();
    state.positions[id]={x:[24,73,35][state.selected.length-1],y:[38,40,72][state.selected.length-1]};
  }
  if(pos) state.positions[id]=pos;
  activePiece=id; lessonMessage=`${getEquipment(id).name} selected. Tap the lawn or use arrow keys to move it.`;
  save();render();
}
function boundedPosition(x,y) { return {x:Math.max(12,Math.min(88,x)),y:Math.max(24,Math.min(79,y))}; }
function pointOnCanvas(event,canvas) {
  const rect=canvas.getBoundingClientRect();return boundedPosition((event.clientX-rect.left)/rect.width*100,(event.clientY-rect.top)/rect.height*100);
}
function updatePiece(id,pos) {
  state.positions[id]=boundedPosition(pos.x,pos.y);save();
  const element=$(`[data-piece="${id}"]`);
  if(element) {element.style.left=state.positions[id].x+'%';element.style.top=state.positions[id].y+'%';}
}
function bindLesson() {
  $$('[data-goto]',$('#lesson')).forEach(b=>b.addEventListener('click',()=>setPage(Number(b.dataset.goto))));
  $$('[data-answer]').forEach(input=>input.addEventListener('input',()=>{
    state.answers[input.dataset.answer]=input.value;delete state.checked[input.dataset.answer];
    input.classList.remove('correct','incorrect');input.removeAttribute('aria-invalid');
    const feedback=$('#'+input.id+'-feedback');feedback.className='field-feedback';feedback.textContent='Ready to check when you are.';
    save();
  }));
  $$('[data-scratch]').forEach(input=>input.addEventListener('input',()=>{state.scratch[input.dataset.scratch]=input.value;save();}));
  $$('[data-state]').forEach(input=>input.addEventListener('input',()=>{
    state[input.dataset.state]=input.value;save();
    if(input.dataset.state==='learnerName')$('.canvas-label').textContent=input.value?input.value+'’s playground':'Your playground';
  }));
  $$('[data-final-work]').forEach(input=>input.addEventListener('input',()=>{state.finalWork[input.dataset.finalWork]=input.value;save();}));
  $$('[data-check-pair]').forEach(b=>b.addEventListener('click',()=>checkPair(b.dataset.checkPair)));
  $$('[data-hint]').forEach(b=>b.addEventListener('click',()=>{const hint=$('#hint-'+b.dataset.hint);hint.hidden=!hint.hidden;b.setAttribute('aria-expanded',String(!hint.hidden));}));
  $('#check-interview')?.addEventListener('click',()=>{for(const e of equipment)for(const k of ['perimeter','area'])checkOne(e.id+'-'+k);save();render();$('#review-feedback').textContent='All six blocks checked. Visit any block to revise your work.';});
  $$('[data-choice]').forEach(button=>{
    button.addEventListener('click',()=>{
      pendingChoice=button.dataset.choice;
      $$('[data-choice]').forEach(b=>b.classList.toggle('pending',b===button));
      $('#choice-status').textContent='Picture selected. Tap the green box to place it, or drag it there.';
      $('#custom-slot').focus({preventScroll:true});
    });
    button.addEventListener('dragstart',event=>{dragPayload='choice:'+button.dataset.choice;event.dataTransfer.setData('text/plain',dragPayload);event.dataTransfer.effectAllowed='copy';});
  });
  const slot=$('#custom-slot');
  if(slot){slot.addEventListener('click',()=>{if(pendingChoice)placeChoice(pendingChoice);else $('#choice-status').textContent='Select a picture from the tray below first.';});slot.addEventListener('dragover',event=>{event.preventDefault();slot.classList.add('drag-over');});slot.addEventListener('dragleave',()=>slot.classList.remove('drag-over'));slot.addEventListener('drop',event=>{event.preventDefault();slot.classList.remove('drag-over');const value=event.dataTransfer.getData('text/plain')||dragPayload;if(value.startsWith('choice:'))placeChoice(value.slice(7));});}
  $$('[data-add-piece]').forEach(button=>{
    button.addEventListener('click',()=>{addPiece(button.dataset.addPiece);$('#playground-canvas')?.focus({preventScroll:true});});
    button.addEventListener('dragstart',event=>{dragPayload='piece:'+button.dataset.addPiece;event.dataTransfer.setData('text/plain',dragPayload);event.dataTransfer.effectAllowed='copyMove';});
  });
  const canvas=$('#playground-canvas');
  if(canvas){
    canvas.addEventListener('dragover',event=>{event.preventDefault();canvas.classList.add('drag-over');});
    canvas.addEventListener('dragleave',()=>canvas.classList.remove('drag-over'));
    canvas.addEventListener('drop',event=>{event.preventDefault();canvas.classList.remove('drag-over');const value=event.dataTransfer.getData('text/plain')||dragPayload;if(value.startsWith('piece:'))addPiece(value.slice(6),pointOnCanvas(event,canvas));});
    canvas.addEventListener('click',event=>{if(!event.target.closest('[data-piece]')&&state.positions[activePiece])updatePiece(activePiece,pointOnCanvas(event,canvas));});
    canvas.addEventListener('keydown',event=>{
      if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)||!state.positions[activePiece])return;
      event.preventDefault();const pos={...state.positions[activePiece]},step=event.shiftKey?5:1;
      if(event.key==='ArrowUp')pos.y-=step;if(event.key==='ArrowDown')pos.y+=step;if(event.key==='ArrowLeft')pos.x-=step;if(event.key==='ArrowRight')pos.x+=step;updatePiece(activePiece,pos);
    });
    $$('[data-piece]').forEach(button=>{
      button.addEventListener('click',event=>{event.stopPropagation();activePiece=button.dataset.piece;$$('[data-piece]').forEach(b=>b.classList.toggle('selected',b===button));$('#remove-piece').disabled=activePiece==='custom';$('#builder-status').textContent=getEquipment(activePiece).name+' selected. Use arrow keys or tap a spot on the lawn.';});
      button.addEventListener('dragstart',event=>{dragPayload='piece:'+button.dataset.piece;event.dataTransfer.setData('text/plain',dragPayload);event.dataTransfer.effectAllowed='move';});
      let pointerStart=null;
      button.addEventListener('pointerdown',event=>{if(event.button!==0)return;event.preventDefault();activePiece=button.dataset.piece;$$('[data-piece]').forEach(b=>b.classList.toggle('selected',b===button));$('#remove-piece').disabled=activePiece==='custom';button.focus({preventScroll:true});pointerStart={id:button.dataset.piece,x:event.clientX,y:event.clientY};button.setPointerCapture(event.pointerId);});
      button.addEventListener('pointermove',event=>{if(!pointerStart)return;if(Math.hypot(event.clientX-pointerStart.x,event.clientY-pointerStart.y)>4){event.preventDefault();updatePiece(pointerStart.id,pointOnCanvas(event,canvas));}});
      button.addEventListener('pointerup',()=>{pointerStart=null;});button.addEventListener('pointercancel',()=>{pointerStart=null;});
    });
  }
  $('#remove-piece')?.addEventListener('click',()=>{if(activePiece==='custom')return;state.selected=state.selected.filter(id=>id!==activePiece);delete state.positions[activePiece];clearFinalChecks();activePiece='custom';lessonMessage='Block removed. Choose a different block below.';save();render();});
  $('#arrange-pieces')?.addEventListener('click',()=>{['custom',...state.selected].forEach((id,i)=>{state.positions[id]={x:[28,70,28,70][i],y:[37,37,73,73][i]};});lessonMessage='Your blocks are arranged. Move them wherever you like.';save();render();});
  $('#check-final')?.addEventListener('click',()=>{
    const results=['final-playground','final-total','final-grass'].map(checkOne);save();render();
    const success=results.every(r=>r.correct),banner=$('#final-feedback');banner.className='feedback-banner '+(success?'success':'notice');
    banner.innerHTML=`<img class="feedback-boss" src="assets/boss-${success?'happy':'surprised'}.png" alt="Baby Boss"><p><strong>${success?'Your playground plan checks out!':'You’re getting there.'}</strong><br>${success?'You found the space for every block and the grass. Your plan is ready to share.':'Keep your work. Check each area, then subtract to find the grass.'}</p>`;
  });
  $('#print-work')?.addEventListener('click',printWork);
}

function downloadWork() {
  save();const blob=new Blob([JSON.stringify({app:'TruePBL Playground',...state},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='my-playground-project.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('#save-label').textContent='Project file downloaded';
}
function openMap() {
  const root=$('#dialog-root');
  root.innerHTML=`<div class="modal-overlay"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="map-title"><div class="modal-heading"><div><p class="eyebrow">Your adventure</p><h2 id="map-title">Lesson map</h2></div><button class="icon-button" id="close-map" aria-label="Close lesson map">×</button></div><div class="menu-grid">${pageTitles.map((title,i)=>`<button class="menu-page ${i===state.page?'active':''}" data-menu-page="${i}"><span>${String(i+1).padStart(2,'0')}</span>${title}</button>`).join('')}</div><div class="modal-actions"><label class="button secondary" for="import-work">Open saved project<input id="import-work" type="file" accept=".json,application/json" class="sr-only"></label><button class="button quiet" id="start-over">Start a new project</button></div><p class="modal-note" role="status">Your work stays on this device. Save a project file to move it to another browser.</p></section></div>`;
  const close=()=>{root.innerHTML='';$('#open-menu').focus();};
  $('#close-map').addEventListener('click',close);
  $('.modal-overlay').addEventListener('click',e=>{if(e.target.classList.contains('modal-overlay'))close();});
  $$('[data-menu-page]').forEach(b=>b.addEventListener('click',()=>{close();setPage(Number(b.dataset.menuPage));}));
  $('#import-work').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>1000000)throw new Error('File too large.');const imported=JSON.parse(await file.text());if(imported.app!=='TruePBL Playground'||imported.version!==1)throw new Error('Choose a saved Playground project file.');state=restore(imported);save();close();render();}catch(error){$('.modal-note').textContent=error.message||'That file could not be opened.';}
  });
  $('#start-over').addEventListener('click',()=>{
    $('.modal-note').innerHTML='Save your current work before starting again. <button class="button quiet small" id="save-before-reset">Save my current work</button> <button class="button secondary small" id="confirm-reset">Start fresh</button>';
    $('#save-before-reset').addEventListener('click',downloadWork);$('#confirm-reset').addEventListener('click',()=>{state=newState();activePiece='custom';save();close();render();});
  });
  $('.modal').addEventListener('keydown',event=>{
    if(event.key==='Escape'){close();return;}
    if(event.key==='Tab'){const focusable=$$('button,input,a[href]', $('.modal')).filter(e=>!e.disabled);const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
  });
  $('#close-map').focus();
}
function printWork() {
  const totals=state.selected.length===3&&state.customChoice?equipmentTotals(state.selected):null;
  $('#print-report')?.remove();
  const report=document.createElement('section');report.id='print-report';
  report.innerHTML=`<h1>Design Your Playground!</h1><p>${escape(state.learnerName||'My playground project')} · 7.EE-1 / 7.EE-3</p>${canvasMarkup(true)}<h2>My interview answers</h2><table><thead><tr><th>Block</th><th>Perimeter (yd)</th><th>Area (yd²)</th></tr></thead><tbody>${[...equipment,getEquipment('custom')].map(e=>`<tr><th>${escape(e.name)}</th><td>${escape(state.answers[e.id+'-perimeter']||'—')}</td><td>${escape(state.answers[e.id+'-area']||'—')}</td></tr>`).join('')}</tbody></table><h2>My final plan</h2><p>Selected blocks: ${state.selected.map(id=>escape(getEquipment(id).name)).join(', ')} + ${escape(state.customName||'my own block')}</p>${['playground','total','grass'].map((id,i)=>`<h3>${['Area of this playground','Total area of my equipments','Remaining area for the grass'][i]}</h3><p>${escape(state.finalWork[id])}</p><p><strong>${escape(state.answers['final-'+id]||'Not answered')} yd²</strong></p>`).join('')}<p>${escape(state.reflection)}</p><footer>©TruePBL. All rights reserved.</footer>`;
  document.body.append(report);window.print();
}

$('#previous').addEventListener('click',()=>setPage(state.page-1));
$('#next').addEventListener('click',next);
$('#open-menu').addEventListener('click',openMap);
$('#export-work').addEventListener('click',downloadWork);
$$('.step').forEach((b,i)=>b.addEventListener('click',()=>setPage(i)));
$$('.chapter').forEach((b,i)=>b.addEventListener('click',()=>setPage(chapterPages[i])));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#dialog-root').children.length)$('#close-map')?.click();});
render();
