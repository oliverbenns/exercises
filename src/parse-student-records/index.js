const readFile = require('./read-file');

const files = [
  {
    name: 'comma.txt',
    delimiter: ',',
    keys: ['last_name', 'first_name', 'campus', 'favorite_color', 'date_of_birth'],
    data: null,
  },
  {
    name: 'dollar.txt',
    delimiter: '$',
    keys: ['last_name', 'first_name', 'middle_initial', 'campus', 'date_of_birth', 'favorite_color'],
    data: null,
  },
  {
    name: 'pipe.txt',
    delimiter: '|',
    keys: ['last_name', 'first_name', 'middle_initial', 'campus', 'favorite_color', 'date_of_birth'],
    data: null,
  },
];

const promises = files.map(f => readFile(f.name));

const parseData = file => {
  const rows = file.data
    .split('\n')
    .filter(row => row !== '') // My editor adds new lines to EOF.
    .map(row => {
      return row
        .split(file.delimiter)
        .map(c => c.trim()); // Removes whitespace from either side of delimiter.
    });

  const record = {};

  const records = rows.map(row => {
    const record = {};

    // Loop through columns and map to ordering.
    row.forEach((column, index) => {
      const key = file.keys[index];
      record[key] = column;
    })

    return record;
  })

  return records;
};

Promise
  .all(promises)
  .then(data => data.map((d, i) => {
    const file = files[i];
    file.data = d;

    return file;
  }))
  .then(files => files.map(parseData))
  .then(parsedFiles => [].concat(...parsedFiles)) // Flatten all of our files to single array.
  .then(records => {
    console.log('records', records);
  });
