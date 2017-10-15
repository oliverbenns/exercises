const readFile = require('./read-file');
const files = require('./files');
const parseData = require('./parse-data');

const createRecord = (rowData, keys) => {
  const record = {};

  // Loop through columns and map to ordering.
  rowData.forEach((column, index) => {
    const key = keys[index];
    record[key] = column;
  });

  // Normalise the dates.
  record.date_of_birth = record.date_of_birth.replace(/-/g, '/');

  return record;
}

const promises = files.map(f => {
  return readFile(f.name)
    .then(data => ({ ...f, data }))
    .then(parseData)
    .then(data => data.map(d => createRecord(d, f.keys)));
});

Promise
  .all(promises)
  .then(parsedFiles => [].concat(...parsedFiles)) // Flatten all of our files to single array.
  .then(records => {
    console.log('records', records);
  });
