/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: move-zeroes.js
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 *   maintaining the relative order of the non-zero elements.
 *
 * Example:
 * Given nums = [0, 1, 0, 3, 12], after calling your function, nums should be
 *   [1, 3, 12, 0, 0].
 *
 * Note:
 * 1. You must do this in-place without making a copy of the array.
 * 2. Minimize the total number of operations.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length; i--;) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

// Add return nums to function when testing.
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
