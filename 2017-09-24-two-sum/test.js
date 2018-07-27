const test = require('ava');
const twoSum = require('.');

const cases = [
  { numbers: [2, 7, 11, 15], target: 9, expected: [ 0, 1 ] },
  { numbers: [10, 4, 2, 8], target: 6, expected: [ 1, 2 ] },
  { numbers: [2, 9, 3, 1], target: 10, expected: [ 1, 3 ] },
  { numbers: [2, 1], target: 4, expected: null },
];

cases.forEach(c => {
  test(`returns ${c.expected} when numbers are ${c.numbers} and target is ${c.target}`, t => {
    const result = twoSum(c.numbers, c.target);
    t.deepEqual(result, c.expected);
  });
});
