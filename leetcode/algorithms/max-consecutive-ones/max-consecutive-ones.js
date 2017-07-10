/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: max-consecutive-ones.js
 *
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *
 * Example:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum
 *   number of consecutive 1s is 3.
 *
 * Note:
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  return nums.join('').split(/[0]+/g).reduce((x, y) => Math.max(x, y.length), 0);
};

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1]));
