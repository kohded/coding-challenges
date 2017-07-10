/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: hamming-distance.js
 *
 * The Hamming distance between two integers is the number of positions at
 *   which the corresponding bits are different. Given two integers x and y,
 *   calculate the Hamming distance.
 *
 * Note:
 * 0 ≤ x, y < 2^31.
 *
 * Example:
 * Input: x = 1, y = 4
 * Output: 2
 *
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ?   ?
 *
 * The above ? point to positions where the corresponding bits are different.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // x ^ y to get corresponding bits that are different, toString the integer
  // to binary with a radix of 2, remove all 0's, and get the length of the
  // binary number of remaining 1's for the hamming distance.
  return (x ^ y).toString(2).replace(/0/g, '').length;
};

console.log(hammingDistance(1, 4));
