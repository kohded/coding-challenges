/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9//2017
 * File: single-number.js
 *
 * Given an array of integers, every element appears twice except for one. Find
 *   that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you
 *   implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};

console.log(singleNumber([1, 2, 3, 4, 8, 1, 2, 3, 4]));
