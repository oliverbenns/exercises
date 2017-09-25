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

twoSum([2, 7, 11, 15], 9); // [ 0, 1 ]
twoSum([10, 4, 2, 8], 6);  // [ 1, 2 ]
twoSum([2, 9, 3, 1], 10);  // [ 1, 3 ]
twoSum([2, 1], 4);         // null
