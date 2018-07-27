import createRecord from './create-record';
import test from 'ava';

const keys = ['last_name', 'first_name', 'campus', 'favorite_color', 'date_of_birth'];

test('parses data successfully', t => {
  t.plan(2);

  const data = ['Kirlin', 'Mckayla', 'Atlanta', 'Maroon', '5/29/1986'];

  const record = createRecord(data, keys);

  t.true(record.last_name === 'Kirlin');
  t.true(record.date_of_birth === '5/29/1986');
});

test('normalises date of birth', t => {
  t.plan(1);

  const data = ['Kirlin', 'Mckayla', 'Atlanta', 'Maroon', '5-29-1986'];

  const record = createRecord(data, keys);

  t.true(record.date_of_birth === '5/29/1986');
});

test('maps campus city codes to city name', t => {
  t.plan(1);

  const data = ['Kirlin', 'Mckayla', 'NYC', 'Maroon', '5/29/1986'];

  const record = createRecord(data, keys);

  t.true(record.campus === 'New York City');
});
