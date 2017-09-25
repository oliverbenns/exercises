// https://leetcode.com/problems/ugly-number/description/
// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
// Note that 1 is typically treated as an ugly number.

const isUgly = num => {
  if (num < 1) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  const uglyFactors = [2, 3, 5];

  for(let i = 2; i < num; i++) {
    if (num % i !== 0) {
      break;
    }

    if (!uglyFactors.find(uF => uF === i) || !uglyFactors.find(uF => uF === num / i)) {
      return false;
    }
  }

  return true;
};

// const foo = isUgly(6); // true
const bar = isUgly(8); // true
// const baz = isUgly(14); // false

// console.log('foo', foo);
console.log('bar', bar);
// console.log('baz', baz);
