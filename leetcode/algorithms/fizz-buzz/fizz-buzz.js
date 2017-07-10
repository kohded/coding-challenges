/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 7/9/2017
 * File: fizz-buzz.js
 *
 * Write a program that outputs the string representation of numbers from 1 to
 *   n. But for multiples of three it should output “Fizz” instead of the
 *   number and for the multiples of five output “Buzz”. For numbers which are
 *   multiples of both three and five output “FizzBuzz”.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const values = [];

  while (n) {
    let value = '';

    if (n % 3 === 0) { value = 'Fizz'; }
    if (n % 5 === 0) { value += 'Buzz'; }
    if (!value) { value = `${n}`; }

    n--;

    values[n] = value;
  }

  return values;
};

console.log(fizzBuzz(15));
