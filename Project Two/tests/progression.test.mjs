import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const mathSource = await readFile(new URL('../math-engine.js', import.meta.url), 'utf8');
const mathUrl = 'data:text/javascript;base64,' + Buffer.from(mathSource).toString('base64');
const dataSource = await readFile(new URL('../data.js', import.meta.url), 'utf8');
const dataUrl = 'data:text/javascript;base64,' + Buffer.from(dataSource).toString('base64');
const progressionSource = (await readFile(new URL('../progression.js', import.meta.url), 'utf8'))
  .replace("'./math-engine.js'", JSON.stringify(mathUrl))
  .replace("'./data.js'", JSON.stringify(dataUrl));
const { canVisit, nextPageAllowed, completedMath, maxReachablePage, CUSTOM_CHOICE_IDS } =
  await import('data:text/javascript;base64,' + Buffer.from(progressionSource).toString('base64'));
const { equivalentAnswer } = await import(mathUrl);

const keys = {
  fountain: ['2x+28','10x+40'], slide: ['4x-4','6x-15'], swing: ['2x+9','2.5x+5'],
  statue: ['2x-2','2x-6'], basketball: ['4x+70','70x'], soccer: ['8x+69.2','112.8x+180.48'],
  custom: ['4x+6y+46','46x+69y'],
};
const fresh = () => ({page:0, answers:{}, checked:{}, scratch:{}, customChoice:'', customName:'', selected:[], positions:{}, visited:[]});
function fill(state,id,checked=true) {
  ['perimeter','area'].forEach((kind,index) => {
    const key=`${id}-${kind}`, value=keys[id][index]; state.answers[key]=value;
    if(checked) state.checked[key]={value,correct:true,message:'Correct'};
  });
}
function interviewReady() { const state=fresh(); for(const id of Object.keys(keys).filter(id=>id!=='custom')) fill(state,id); return state; }
function customReady() { const state=interviewReady(); state.customChoice='carousel'; state.customName='Dream Machine'; fill(state,'custom'); return state; }
function finished() { const state=customReady(); state.selected=['fountain','slide','soccer']; ['custom',...state.selected].forEach((id,plot)=>state.positions[id]={x:25+(plot%2)*50,y:25+Math.floor(plot/2)*50,plot}); return state; }

test('intro pages and first interview are available, later page jumps are blocked',()=>{
  const state=fresh();
  assert.equal(maxReachablePage(state),2);
  for(let page=0;page<14;page++) assert.equal(canVisit(page,state),page<=2);
  state.visited=Array.from({length:14},(_,i)=>i);
  assert.equal(canVisit(13,state),false);
  assert.equal(canVisit(-1,state),false);assert.equal(canVisit(14,state),false);assert.equal(canVisit('2',state),false);
  state.page=2;assert.equal(nextPageAllowed(state),false);
  state.page=1;assert.equal(nextPageAllowed(state),true);
});

test('each interview requires two correct CURRENT explicitly checked answers',()=>{
  const state=fresh(); let page=2;
  for(const id of Object.keys(keys).filter(id=>id!=='custom')) {
    fill(state,id,false);assert.equal(completedMath(id,state),false);assert.equal(canVisit(page+1,state),false);
    const p=`${id}-perimeter`,a=`${id}-area`;
    state.checked[p]={value:state.answers[p],correct:true};assert.equal(completedMath(id,state),false);
    state.checked[a]={value:state.answers[a],correct:true};assert.equal(completedMath(id,state),true);
    assert.equal(canVisit(page+1,state),true);page++;
  }
  assert.equal(maxReachablePage(state),9);
  assert.equal(completedMath('unknown',state),false);
});

test('wrong or forged checks and changed text cannot bypass the gate',()=>{
  const state=finished();assert.equal(canVisit(13,state),true);
  state.answers['fountain-perimeter']='2x+280';
  assert.equal(maxReachablePage(state),2);
  state.checked['fountain-perimeter']={value:'2x+280',correct:true};
  assert.equal(completedMath('fountain',state),false);
  state.answers['fountain-perimeter']='28 + 2x';
  assert.equal(completedMath('fountain',state),false);
  state.checked['fountain-perimeter']={value:'28 + 2x',correct:true};
  assert.equal(canVisit(13,state),true);
  const saved=JSON.stringify(state);canVisit(4,state);maxReachablePage(state);assert.equal(JSON.stringify(state),saved);
});

test('custom image and nonblank name gate custom maths, then both checked results gate builder',()=>{
  const state=interviewReady();assert.equal(canVisit(9,state),true);assert.equal(canVisit(10,state),false);
  state.customChoice='carousel';state.customName='   ';assert.equal(maxReachablePage(state),9);
  state.customName='Sky Spinner';state.customChoice='unknown';assert.equal(maxReachablePage(state),9);
  state.customChoice='carousel';assert.equal(canVisit(10,state),true);assert.equal(canVisit(11,state),false);
  fill(state,'custom',false);assert.equal(canVisit(11,state),false);
  fill(state,'custom');assert.equal(canVisit(11,state),true);assert.equal(canVisit(12,state),true);assert.equal(canVisit(13,state),false);
  delete state.checked['custom-area'];assert.equal(maxReachablePage(state),10);
});

test('final stage requires exactly three distinct base blocks and custom in four distinct plots',()=>{
  const state=finished();assert.equal(maxReachablePage(state),13);
  const original=JSON.parse(JSON.stringify(state));
  for(const selected of [[],['fountain','slide'],['fountain','slide','soccer','statue'],['fountain','fountain','soccer'],['fountain','slide','bogus']]) {
    state.selected=selected;assert.equal(canVisit(13,state),false);
  }
  Object.assign(state,original);delete state.positions.custom;assert.equal(canVisit(13,state),false);
  Object.assign(state,JSON.parse(JSON.stringify(original)));state.positions.soccer.plot=state.positions.slide.plot;assert.equal(canVisit(13,state),false);
  state.positions.soccer.plot=4;assert.equal(canVisit(13,state),false);
  state.positions.soccer.plot=3;state.positions.soccer.x=Infinity;assert.equal(canVisit(13,state),false);
  state.positions.soccer.x=75;state.customName='';assert.equal(maxReachablePage(state),9);
});

test('earlier edits relock future pages without deleting scratch work or selected design',()=>{
  const state=finished();state.page=13;state.scratch['fountain-p-0']='x+4';
  state.answers['slide-area']='6x+15';
  const before=JSON.stringify(state);assert.equal(maxReachablePage(state),3);assert.equal(canVisit(3,state),true);assert.equal(canVisit(4,state),false);
  assert.equal(nextPageAllowed(state),false);assert.equal(JSON.stringify(state),before);
  for(let page=0;page<=3;page++)assert.equal(canVisit(page,state),true);
});

test('all style names use the identical state gate and no persisted check flags override mathematics',()=>{
  for(const style of ['source','overlay','separate']) {
    const state=finished();state.style=style;assert.equal(canVisit(13,state),true);
    state.answers['basketball-area']='Correct Answer';state.checked['basketball-area']={value:'Correct Answer',correct:true};
    assert.equal(maxReachablePage(state),6);
  }
  assert.equal(new Set(CUSTOM_CHOICE_IDS).size,CUSTOM_CHOICE_IDS.length);
  assert.equal(CUSTOM_CHOICE_IDS.length,20);
  for(const id of CUSTOM_CHOICE_IDS) {const state=customReady();state.customChoice=id;assert.equal(canVisit(12,state),true,id);}
});

test('unit and spacing regressions preserve full-expression correctness',()=>{
  for(const answer of ['10 x + 40','40 + 10 x yd','A: 10x + 40 yd²','Area = 10(x+4) = 10x+40 yards squared','10x+40 1D','10x+40 1D²','10x+40 y d','10x+40 square yards']) {
    assert.equal(equivalentAnswer(answer,'10x+40').correct,true,answer);
  }
  for(const answer of ['10x+400 yd','2x+280','hello 10x+40','10x+40 nonsense','10x+40 yd + 1','A: 10x+40;alert(1)','10 x + 4 0 yd']) {
    assert.equal(equivalentAnswer(answer,'10x+40').correct,false,answer);
  }
});

