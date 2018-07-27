// https://leetcode.com/problems/two-sum/description/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (numbers, target) => {
  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const remainder = target - number;

    for(let j = i + 1; j < numbers.length; j++) {
      const number = numbers[j];

      if (number === remainder) {
        return [i, j];
      }
    }
  }
  return null;
}

module.exports = twoSum;
