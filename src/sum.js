/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("Arguments must not be NaN");
  }

  return a + b;
}
