/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: sum-of-two-integers.js
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use
 *   the operator + and -.
 *
 * Example:
 * Given a = 1 and b = 2, return 3.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};

console.log(getSum(1, 2));
