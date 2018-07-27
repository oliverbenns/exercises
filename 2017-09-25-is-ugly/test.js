const test = require('ava');
const isUgly = require('.');

const cases = [
  { num: 6, expected: true },
  { num: 8, expected: true },
  { num: 14, expected: false },
  { num: 17, expected: false },
];

cases.forEach(c => {
  test(`returns ${c.expected} when num is ${c.num}`, t => {
    const result = isUgly(c.num);
    t.is(result, c.expected);
  });
});
