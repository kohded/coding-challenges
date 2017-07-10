/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: reverse-integer.js
 *
 * Reverse digits of an integer.
 *
 * Example:
 * 1. x = 123, return 321
 * 2. x = -123, return -321
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should
 *   return 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let reversed = parseInt(x.toString().split('').reverse().join(''), 10);

  if (x < 0) {
    reversed = -reversed;
  }

  if (reversed > (2 ** 31) - 1 || reversed < -(2 ** 31)) {
    return 0;
  }

  return reversed;
};

console.log(reverse(8463847412)); // Overflow, return 0.
console.log(reverse(7463847412));
