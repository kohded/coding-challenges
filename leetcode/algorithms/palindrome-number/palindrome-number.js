/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: palindrome-number.js
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x === parseInt(x.toString().split('').reverse().join(''), 10);
};

console.log(isPalindrome(242));
console.log(isPalindrome(442));
