var fs = require('fs');

// Node's FS readFile as a promise.
const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/data/${file}`, 'utf8', (err, data) => err ? reject(err) : resolve(data));
  });
};

module.exports = readFile;
