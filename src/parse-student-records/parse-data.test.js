import parseData from './parse-data';
import test from 'ava';

test('parses data successfully', t => {
  t.plan(2);

  const file = {
    name: 'comma.txt',
    delimiter: ',',
    keys: ['last_name', 'first_name', 'campus', 'favorite_color', 'date_of_birth'],
    data: 'Kirlin, Mckayla, Atlanta, Maroon, 5/29/1986\nParker, Matteo, Melbourne, Burnt Sienna, 2/14/1962\nCummerata, Elliot, New York City, Neon Carrot, 4/3/1947',
  };

  const data = parseData(file);

  t.true(data.length === 3);
  t.true(data[0].length === 5);
});
