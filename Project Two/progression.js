import { equivalentAnswer } from './math-engine.js';
import { CUSTOM_IDS } from './data.js';

/** The page model is shared by all visual variants; IDs are zero based. */
const INTERVIEW_IDS = Object.freeze(['fountain', 'slide', 'swing', 'statue', 'basketball', 'soccer']);
const ANSWERS = Object.freeze({
  fountain: Object.freeze({ perimeter: '2x+28', area: '10x+40' }),
  slide: Object.freeze({ perimeter: '4x-4', area: '6x-15' }),
  swing: Object.freeze({ perimeter: '2x+9', area: '2.5x+5' }),
  statue: Object.freeze({ perimeter: '2x-2', area: '2x-6' }),
  basketball: Object.freeze({ perimeter: '4x+70', area: '70x' }),
  soccer: Object.freeze({ perimeter: '8x+69.2', area: '112.8x+180.48' }),
  custom: Object.freeze({ perimeter: '4x+6y+46', area: '46x+69y' }),
});

// The final catalog is fixed rather than accepting arbitrary imported file IDs.
export const CUSTOM_CHOICE_IDS = Object.freeze([...CUSTOM_IDS]);

function customIsReady(state) {
  return CUSTOM_CHOICE_IDS.includes(state?.customChoice)
    && typeof state?.customName === 'string'
    && state.customName.trim().length > 0;
}

/** A result must have been explicitly checked, still match its checked value,
 * and remain mathematically correct. Imported/stale success flags cannot unlock pages. */
export function completedMath(id, state) {
  if (!Object.hasOwn(ANSWERS, id)) return false;
  return ['perimeter', 'area'].every(kind => {
    const key = `${id}-${kind}`;
    const value = state?.answers?.[key];
    const checked = state?.checked?.[key];
    return typeof value === 'string'
      && checked?.correct === true
      && checked.value === value
      && equivalentAnswer(value, ANSWERS[id][kind]).correct;
  });
}

function builderIsReady(state) {
  const selected = state?.selected;
  if (!customIsReady(state) || !Array.isArray(selected) || selected.length !== 3
    || new Set(selected).size !== 3 || selected.some(id => !INTERVIEW_IDS.includes(id))) return false;
  const plots = new Set();
  for (const id of ['custom', ...selected]) {
    const position = state?.positions?.[id];
    if (!position || !Number.isFinite(position.x) || !Number.isFinite(position.y)
      || position.x < 0 || position.x > 100 || position.y < 0 || position.y > 100
      || !Number.isInteger(position.plot) || position.plot < 0 || position.plot > 3) return false;
    plots.add(position.plot);
  }
  return plots.size === 4;
}

/** Last reachable page. Computed from current answers/placements on every call;
 * no visit history or visual variant can bypass a prerequisite. */
export function maxReachablePage(state) {
  for (let index = 0; index < INTERVIEW_IDS.length; index++) {
    if (!completedMath(INTERVIEW_IDS[index], state)) return index + 2;
  }
  if (!customIsReady(state)) return 9;
  if (!completedMath('custom', state)) return 10;
  return builderIsReady(state) ? 13 : 12;
}

/** Previous reachable pages remain available; a changed earlier answer relocks
 * everything beyond that question while preserving all state and work. */
export function canVisit(target, state) {
  return Number.isInteger(target) && target >= 0 && target <= 13
    && target <= maxReachablePage(state);
}

/** Whether the Next action may advance from the current page. */
export function nextPageAllowed(state) {
  return Number.isInteger(state?.page) && state.page >= 0 && state.page < 13
    && canVisit(state.page + 1, state);
}
