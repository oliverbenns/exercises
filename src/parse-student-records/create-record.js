const cityCodes = {
  LA: 'Los Angeles',
  NYC: 'New York City',
  SF: 'San Francisco',
}

const createRecord = (rowData, keys) => {
  const record = {};

  // Loop through columns and map to ordering.
  rowData.forEach((column, index) => {
    const key = keys[index];
    record[key] = column;
  });

  // Normalise the dates.
  record.date_of_birth = record.date_of_birth.replace(/-/g, '/');

  // Map American city codes to full name
  const mappedName = cityCodes[record.campus];
  if (mappedName) {
    record.campus = mappedName;
  }

  return record;
};

module.exports = createRecord;
