const parseData = file => file.data
  .split('\n')
  .filter(row => row !== '') // My editor adds new lines to EOF.
  .map(row => row
    .split(file.delimiter)
    .map(col => col.trim()) // Removes whitespace from either side of delimiter.
  );

module.exports = parseData;
