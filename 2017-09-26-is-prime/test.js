const test = require('ava');
const isPrime = require('.');

const cases = [
  { num: 10, expected: false },
  { num: 12, expected: false },
  { num: 13, expected: true },
  { num: 61, expected: true },
  { num: 1, expected: false },
];

cases.forEach(c => {
  test(`returns ${c.expected} when num is ${c.num}`, t => {
    const result = isPrime(c.num);
    t.is(result, c.expected);
  });
});
