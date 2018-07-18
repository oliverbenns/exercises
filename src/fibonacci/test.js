const fibonnaci = require('.');
const test = require('ava');

const cases = [
  { n: 0, expected: 0 },
  { n: 1, expected: 1 },
  { n: 2, expected: 1 },
  { n: 5, expected: 5 },
  { n: 9, expected: 34 },
  { n: 12, expected: 144 },
];

cases.forEach(c => {
  test(`returns ${c.expected} when n is ${c.n}`, t => {
    const result = fibonnaci(c.n);
    t.is(result, c.expected);
  });
});
