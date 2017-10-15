const readFile = require('./read-file');
const files = require('./files');
const parseData = require('./parse-data');
const createRecord = require('./create-record');
const log = require('./log');

const promises = files.map(f => {
  return readFile(f.name)
    .then(data => ({ ...f, data }))
    .then(parseData)
    .then(data => data.map(d => createRecord(d, f.keys)));
});

Promise
  .all(promises)
  .then(parsedFiles => [].concat(...parsedFiles)) // Flatten records to single array.
  .then(log);
