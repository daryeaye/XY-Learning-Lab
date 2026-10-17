/** Local-only algebra checking. Source dimensions and keys were verified against the Form. */
const MAX_INPUT_LENGTH = 512;
const MAX_DEGREE = 8;
const ZERO = Object.freeze({ n: 0n, d: 1n });
const ONE = Object.freeze({ n: 1n, d: 1n });

function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b) [a, b] = [b, a % b];
  return a;
}

function fraction(n, d = 1n) {
  if (!d) throw new Error('Division by zero is not allowed.');
  if (!n) return ZERO;
  if (d < 0n) { n = -n; d = -d; }
  const common = gcd(n, d);
  return { n: n / common, d: d / common };
}

const add = (a, b) => fraction(a.n * b.d + b.n * a.d, a.d * b.d);
const negate = a => ({ n: -a.n, d: a.d });
const multiply = (a, b) => fraction(a.n * b.n, a.d * b.d);
const divide = (a, b) => fraction(a.n * b.d, a.d * b.n);

function decimalFraction(text) {
  const [whole, decimal = ''] = text.split('.');
  return fraction(BigInt((whole || '0') + decimal), 10n ** BigInt(decimal.length));
}

function polynomialConstant(value) {
  return value.n ? new Map([['0,0', value]]) : new Map();
}

function addPolynomials(a, b, subtract = false) {
  const result = new Map(a);
  for (const [power, value] of b) {
    const sum = add(result.get(power) || ZERO, subtract ? negate(value) : value);
    if (sum.n) result.set(power, sum);
    else result.delete(power);
  }
  return result;
}

function multiplyPolynomials(a, b) {
  const result = new Map();
  for (const [powerA, valueA] of a) {
    const [ax, ay] = powerA.split(',').map(Number);
    for (const [powerB, valueB] of b) {
      const [bx, by] = powerB.split(',').map(Number);
      if (ax + ay + bx + by > MAX_DEGREE) {
        throw new Error('Use an expression of degree 8 or less.');
      }
      const power = `${ax + bx},${ay + by}`;
      const value = add(result.get(power) || ZERO, multiply(valueA, valueB));
      if (value.n) result.set(power, value);
      else result.delete(power);
    }
  }
  return result;
}

function stripUnit(part) {
  // Only recognized trailing unit tokens are removed. "1D" is the user's explicit
  // spoken/transcription variant for the displayed yard unit, not algebra.
  return part.replace(/\s*(?:square\s+(?:yards?|y\s*d\s*s?)|(?:yards?|y\s*d\s*s?|1\s*d)(?:\s*(?:\^\s*2|²|2|squared))?)\s*$/i, '').trim();
}

function prepareAnswer(input) {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error('Enter an algebraic expression.');
  }
  let text = String(input).trim();
  if (!text) throw new Error('Enter an expression before checking.');
  if (text.length > MAX_INPUT_LENGTH) throw new Error('Keep your answer under 512 characters.');
  text = text.replace(/[−–—]/g, '-').replace(/[×·⋅]/g, '*').replace(/[÷⁄]/g, '/');
  // A small, anchored label vocabulary permits familiar answer notation without
  // searching inside arbitrary prose or accepting part of an incorrect answer.
  text = text.replace(/^\s*(?:p|a|perimeter|area)\s*:\s*/i, '');
  const parts = text.split('=');
  if (parts.length > 8) throw new Error('Use a shorter line of working.');
  if (parts.length > 1 && /^(?:p|a|perimeter|area)$/i.test(parts[0].trim())) parts.shift();
  const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  return parts.map(part => {
    part = stripUnit(part).toLowerCase();
    part = part.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, match => '^' + [...match].map(c => superscripts.indexOf(c)).join(''));
    if (/[\d.]\s+(?=[\d.])/.test(part)) throw new Error('Separate numbers with a math symbol.');
    part = part.replace(/\s+/g, '');
    if (!part) throw new Error('Complete each side of your equation.');
    if (/[^\d.xy+\-*/^()]/.test(part)) {
      throw new Error('Use numbers, x, y, parentheses and math symbols only.');
    }
    return part;
  });
}

/** Normalized final right-hand expression; equation working is preserved for validation elsewhere. */
export function normalizeAnswer(input) {
  return prepareAnswer(input).at(-1);
}

function tokenize(text) {
  const tokens = [];
  let index = 0;
  while (index < text.length) {
    const match = /^(?:\d+(?:\.\d*)?|\.\d+)/.exec(text.slice(index));
    if (match) {
      tokens.push({ type: 'number', value: match[0] });
      index += match[0].length;
      if (text[index] === '.') throw new Error('Use only one decimal point in each number.');
    } else {
      const symbol = text[index++];
      if (!'xy+-*/^()'.includes(symbol)) throw new Error('Check the numbers in your expression.');
      tokens.push({ type: symbol });
    }
  }
  tokens.push({ type: 'end' });
  return tokens;
}

function parseExpression(text) {
  const tokens = tokenize(text);
  let position = 0;
  let depth = 0;
  const peek = () => tokens[position].type;
  const take = type => {
    if (peek() !== type) return false;
    position++;
    return true;
  };
  const startsPrimary = () => ['number', 'x', 'y', '('].includes(peek());

  function primary() {
    const token = tokens[position];
    if (take('number')) return polynomialConstant(decimalFraction(token.value));
    if (take('x')) return new Map([['1,0', ONE]]);
    if (take('y')) return new Map([['0,1', ONE]]);
    if (take('(')) {
      if (++depth > 32) throw new Error('Use fewer nested parentheses.');
      const value = expression();
      if (!take(')')) throw new Error('Close every opening parenthesis.');
      depth--;
      return value;
    }
    throw new Error('A number, x, y or parenthesis is missing.');
  }

  function power() {
    let value = primary();
    if (take('^')) {
      const token = tokens[position];
      if (token.type !== 'number' || !/^\d+$/.test(token.value)) {
        throw new Error('Use a whole-number exponent from 0 to 8.');
      }
      position++;
      const exponent = Number(token.value);
      if (exponent > MAX_DEGREE) throw new Error('Use a whole-number exponent from 0 to 8.');
      const base = value;
      value = polynomialConstant(ONE);
      for (let i = 0; i < exponent; i++) value = multiplyPolynomials(value, base);
    }
    return value;
  }

  function unary() {
    if (take('+')) return unary();
    if (take('-')) return new Map([...unary()].map(([key, value]) => [key, negate(value)]));
    return power();
  }

  function term() {
    let value = unary();
    while (true) {
      if (take('*')) value = multiplyPolynomials(value, unary());
      else if (take('/')) {
        const denominator = unary();
        if (denominator.size !== 1 || !denominator.has('0,0')) {
          if (denominator.size === 0) throw new Error('Division by zero is not allowed.');
          throw new Error('Divide by a number, rather than an expression containing x or y.');
        }
        value = new Map([...value].map(([key, coefficient]) => [key, divide(coefficient, denominator.get('0,0'))]));
      } else if (startsPrimary()) value = multiplyPolynomials(value, unary());
      else break;
    }
    return value;
  }

  function expression() {
    let value = term();
    while (true) {
      if (take('+')) value = addPolynomials(value, term());
      else if (take('-')) value = addPolynomials(value, term(), true);
      else break;
    }
    return value;
  }

  const result = expression();
  if (peek() !== 'end') throw new Error('Check for an extra symbol or parenthesis.');
  return result;
}

function parseAnswer(input) {
  // Validate all working, then check the final RHS. This never executes student input.
  const expressions = prepareAnswer(input);
  let result;
  for (const expression of expressions) result = parseExpression(expression);
  return result;
}

function coefficientName(key) {
  const [x, y] = key.split(',').map(Number);
  if (!x && !y) return 'constant';
  return (x ? `x${x === 1 ? '' : '^' + x}` : '') + (y ? `y${y === 1 ? '' : '^' + y}` : '');
}

/** Coefficient object. Linear answers return x, y and constant; nonlinear terms have extra keys. */
export function parsePolynomial(input) {
  const result = { x: 0, y: 0, constant: 0 };
  for (const [key, value] of parseAnswer(input)) {
    result[coefficientName(key)] = Number(value.n) / Number(value.d);
  }
  return result;
}

/** Algebraic equivalence is accepted, including unsimplified but correct working. */
export function equivalentAnswer(input, expected) {
  try {
    const actual = parseAnswer(input);
    const target = parseAnswer(expected);
    if (actual.size !== target.size) return { correct: false };
    for (const [key, value] of actual) {
      const other = target.get(key);
      if (!other || value.n !== other.n || value.d !== other.d) return { correct: false };
    }
    return { correct: true };
  } catch (error) {
    return { correct: false, error: error instanceof Error ? error.message : 'Check your expression.' };
  }
}

function cleanNumber(value) {
  if (!Number.isFinite(value)) throw new Error('Polynomial coefficients must be finite numbers.');
  return Number(value.toFixed(10));
}

/** Format the linear expressions used throughout this project, in x, y, constant order. */
export function formatPolynomial({ x = 0, y = 0, constant = 0 } = {}) {
  const terms = [];
  for (const [coefficient, variable] of [[x, 'x'], [y, 'y'], [constant, '']]) {
    const value = cleanNumber(coefficient);
    if (!value) continue;
    const magnitude = Math.abs(value);
    const body = `${variable && magnitude === 1 ? '' : magnitude}${variable}`;
    terms.push(`${value < 0 ? '-' : terms.length ? '+' : ''}${body}`);
  }
  return terms.join('') || '0';
}

const AREAS = Object.freeze({
  fountain: Object.freeze({ x: 10, constant: 40 }),
  slide: Object.freeze({ x: 6, constant: -15 }),
  swing: Object.freeze({ x: 2.5, constant: 5 }),
  statue: Object.freeze({ x: 2, constant: -6 }),
  basketball: Object.freeze({ x: 70, constant: 0 }),
  soccer: Object.freeze({ x: 112.8, constant: 180.48 }),
});

/** Three original rectangles plus the student's custom rectangle, whose area is 46x+69y. */
export function equipmentTotals(ids) {
  if (!Array.isArray(ids) || ids.length !== 3 || new Set(ids).size !== 3 || ids.some(id => !Object.hasOwn(AREAS, id))) {
    throw new Error('Choose three different pieces of equipment.');
  }
  const total = { x: 46, y: 69, constant: 0 };
  for (const id of ids) {
    total.x += AREAS[id].x;
    total.constant += AREAS[id].constant;
  }
  return {
    equipment: formatPolynomial(total),
    grass: formatPolynomial({ x: 400 - total.x, y: -69, constant: 12800 - total.constant }),
    playground: '400x+12800',
  };
}
