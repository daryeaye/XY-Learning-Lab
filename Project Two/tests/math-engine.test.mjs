import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Import as an ES module without requiring changes to the application's package settings.
const source = await readFile(new URL('../app/math-engine.js', import.meta.url), 'utf8');
const { normalizeAnswer, parsePolynomial, equivalentAnswer, formatPolynomial, equipmentTotals } =
  await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));

test('all fourteen fixed math keys accept valid equivalent answers', () => {
  const pairs = [
    ['28 + 2x', '2x+28'], ['40+10*x', '10x+40'],
    ['4(x-1)', '4x-4'], ['3(2x-5)', '6x-15'],
    ['9+2x', '2x+9'], ['(5/2)(x+2)', '2.5x+5'],
    ['2(x-1)', '2x-2'], ['2(x-3)', '2x-6'],
    ['70+4x', '4x+70'], ['35(2x)', '70x'],
    ['69.2+8x', '8x+69.2'], ['28.2(4x+6.4)', '112.8x+180.48'],
    ['46+6y+4x', '4x+6y+46'], ['23(2x+3y)', '46x+69y'],
  ];
  for (const [input, expected] of pairs) assert.equal(equivalentAnswer(input, expected).correct, true, input);
});

test('whitespace, multiplication, optional yard units and final RHS working', () => {
  assert.equal(normalizeAnswer(' P = 2 × (x + 4) + 20 = 28 + 2x yd '), '28+2x');
  for (const input of ['2x+28 yd', '2x+28 yards', '2x+28 yds', '2x+28 yd²', '2x+28 yd^2', '2x+28 square yards']) {
    assert.equal(equivalentAnswer(input, '2x+28').correct, true, input);
  }
  assert.equal(equivalentAnswer('A = 28.2·(4x+6.4) = 112.8x+180.48 yd²', '112.8x+180.48').correct, true);
  assert.equal(equivalentAnswer('2(x+4)+20 = 2x+28', '28+2x').correct, true);
  assert.equal(equivalentAnswer('-(2-x)+x', '2x-2').correct, true);
});

test('fractions and decimals compare exactly, without numeric substitution false positives', () => {
  assert.equal(equivalentAnswer('(5/2)x + 5', '2.5x+5').correct, true);
  assert.equal(equivalentAnswer('x/2', '.5x').correct, true);
  assert.equal(equivalentAnswer('0.1x+0.2x', '0.3x').correct, true);
  assert.equal(equivalentAnswer('2x+29', '2x+28').correct, false);
  assert.equal(equivalentAnswer('2x+28.0000000001', '2x+28').correct, false);
  assert.equal(equivalentAnswer('2x+28+(x-1)(x-2)(x-3)', '2x+28').correct, false);
  assert.equal(equivalentAnswer('Correct Answer', '70x').correct, false);
});

test('parser retains nonlinear terms so they cannot be accidentally ignored', () => {
  assert.deepEqual(parsePolynomial('28+2x'), { x: 2, y: 0, constant: 28 });
  assert.deepEqual(parsePolynomial('x²+2xy-y^2+3'), { x: 0, y: 0, constant: 3, 'x^2': 1, xy: 2, 'y^2': -1 });
  assert.equal(equivalentAnswer('(x+1)^2', 'x²+2x+1').correct, true);
  assert.equal(equivalentAnswer('x²+70x', '70x').correct, false);
  assert.equal(equivalentAnswer('0x+70x', '70x').correct, true);
});

test('malformed, incomplete and executable input is rejected safely', () => {
  const invalid = ['', '2x+', '2**x', '(2x+28', '2x+28)', '2x..2', '2.3.4', '2 8+2x', 'x/0', 'x/(x+1)', 'x^999999', 'x^-2', '=2x+28', '2x+28=', 'alert(1)=2x+28', '2x+28;window.location="x"', 'Math.random()', '__proto__', '<script>2x+28</script>', '{x:2}', '2x+Infinity', '2x+NaN'];
  for (const input of invalid) {
    const result = equivalentAnswer(input, '2x+28');
    assert.equal(result.correct, false, input);
    assert.equal(typeof result.error, 'string', input);
  }
  assert.equal(equivalentAnswer('x'.repeat(513), 'x').correct, false);
});

test('linear formatter handles signs, coefficient one and decimal sums', () => {
  assert.equal(formatPolynomial({ x: 1, y: -1, constant: 0 }), 'x-y');
  assert.equal(formatPolynomial({ x: 0, y: 0, constant: 0 }), '0');
  assert.equal(formatPolynomial({ x: 0.1+0.2, y: -69, constant: 5 }), '0.3x-69y+5');
  assert.throws(() => formatPolynomial({ x: Infinity }));
});

test('dynamic final equipment and grass totals vary correctly with the selected three', () => {
  assert.deepEqual(equipmentTotals(['fountain','slide','swing']), {
    equipment:'64.5x+69y+30', grass:'335.5x-69y+12770', playground:'400x+12800',
  });
  assert.deepEqual(equipmentTotals(['statue','basketball','soccer']), {
    equipment:'230.8x+69y+174.48', grass:'169.2x-69y+12625.52', playground:'400x+12800',
  });
  assert.deepEqual(equipmentTotals(['fountain','basketball','soccer']), {
    equipment:'238.8x+69y+220.48', grass:'161.2x-69y+12579.52', playground:'400x+12800',
  });
  assert.equal(equivalentAnswer('400(x+32)', equipmentTotals(['fountain','slide','swing']).playground).correct, true);
  const total = equipmentTotals(['statue','basketball','soccer']);
  assert.equal(equivalentAnswer(`400(x+32)-(${total.equipment})`, total.grass).correct, true);
});

test('all twenty distinct three-equipment choices preserve area conservation', () => {
  const ids = ['fountain','slide','swing','statue','basketball','soccer'];
  let count=0;
  for (let a=0;a<ids.length;a++) for (let b=a+1;b<ids.length;b++) for (let c=b+1;c<ids.length;c++) {
    const total = equipmentTotals([ids[a],ids[b],ids[c]]);
    assert.equal(equivalentAnswer(`(${total.equipment})+(${total.grass})`, total.playground).correct, true);
    count++;
  }
  assert.equal(count,20);
});

test('invalid equipment selections fail with a clear error', () => {
  for (const selection of [[], ['fountain'], ['fountain','slide'], ['fountain','slide','swing','statue'], ['fountain','fountain','swing'], ['fountain','slide','unknown'], ['fountain','slide','toString'], null]) {
    assert.throws(() => equipmentTotals(selection), /three different/);
  }
});

