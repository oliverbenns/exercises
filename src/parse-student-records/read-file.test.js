import readFile from './read-file';
import test from 'ava';

test('reads file successfully', t => {
  t.plan(1);

  return readFile('comma.txt')
    .then(d => t.pass());
});

test('gives error on unfound file', t => {
  t.plan(1);

  return readFile('__abc.txt')
    .then(d => t.fail())
    .catch(d => t.pass());
});
