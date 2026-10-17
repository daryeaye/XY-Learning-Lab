export const EQUIPMENT = [
  {id:'fountain',name:'Fountain',width:'10',height:'x+4',perimeter:'2x+28',area:'10x+40',color:'#f6d5bc'},
  {id:'slide',name:'Slide',width:'2x-5',height:'3',perimeter:'4x-4',area:'6x-15',color:'#efc2c7'},
  {id:'swing',name:'Swing',width:'x+2',height:'2.5',perimeter:'2x+9',area:'2.5x+5',color:'#ddd0ed'},
  {id:'statue',name:'Statue',width:'2',height:'x-3',perimeter:'2x-2',area:'2x-6',color:'#fff7dc'},
  {id:'basketball',name:'Basketball Court',width:'35',height:'2x',perimeter:'4x+70',area:'70x',color:'#cbe8ce'},
  {id:'soccer',name:'Mini Soccer Field',width:'4x+6.4',height:'28.2',perimeter:'8x+69.2',area:'112.8x+180.48',color:'#d3e4b3'},
];
export const CUSTOM_IDS = ['carousel','icecream-truck','icecream-stand','seesaw','volleyball','merry-go-round','horse-statue','swimming-pool','treehouse','sandpit','climbing-dome','zipline','skate-ramp','picnic-pavilion','splash-pad','rock-climbing-wall','mini-golf','trampoline','play-tunnel','rope-bridge'];
export const INTRO = {
  title:'Design Your Playground!',
  description:'Given the length and width in term of expressions, students will find the perimeter and area of different rectangles by distributive property and skills of simplifying expressions.',
};
export const STORIES = {
  1: ['Hello folks! The school building manager has a wild idea: he wants to transform our schoolyard into a temporary playground wonderland for the holiday season. And guess what? He’s on the hunt for he most epic playground plan from our class!', 'Hold on! He needs to interview you first. The next 6 slides are the interview questions. He only hires the person who gets correct answers!'],
  8: ['Done? Let’s put the answers here!', 'Next up, the boss wants to offer you an advantage: how about your very own block in this playground?'],
  11: ['Are you ready to build your own playground?', 'You will put any 3 equipments plus your own equipment in the playground. Then, you will calculate the remaining area of the playground.'],
};
export const FINAL_DESCRIPTION = 'Congratulations on reaching the final stage of the interview process. To your right, you will find the exact measurements of the playground. Your task is to calculate the area that remains uncovered, as this will help you determine how much of the playground needs to be covered with grass.';
export const FINAL_LABELS = ['Area of this playground: (Show work)', 'Total area of your equipments: (Show work)', 'Remaining area for the grass: (Show work)'];
// Ground anchors sit inside the two rows of grass pads in park-four-plots.png.
export const PLOTS = [{x:33.5,y:40.5},{x:66.5,y:40.5},{x:30.5,y:72},{x:69.5,y:72}];
export function asset(id) { return `assets/${id === 'volleyball' ? 'volleyball-v2' : id}.png`; }
