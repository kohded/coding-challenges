/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: two-sum.js
 *
 * Given an array of integers, return indices of the two numbers such that they
 *   add up to a specific target. You may assume that each input would have
 *   exactly one solution, and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indices = [];
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    // Remainder/map key equals target minus array element.
    const remainder = map[target - nums[i]];

    // If remainder/map key isn't undefined, return indices.
    if (remainder !== undefined) {
      indices[0] = remainder;
      indices[1] = i;

      return indices;
    }

    // Set map key as array element, and map value as index.
    map[nums[i]] = i;
  }

  return indices;
};

console.log(twoSum([4, 2, 6, 1, 3], 3));
console.log(twoSum([-1, -2, -3, -4, -5], -7));
