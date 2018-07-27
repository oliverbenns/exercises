const byCampusAndLastName = (a, b) => {
  const campusCompare = a.campus.localeCompare(b.campus);

  return campusCompare === 0 ? a.last_name.localeCompare(b.last_name) : campusCompare;
};

const byDob = (a, b) => new Date(a.date_of_birth) - new Date(b.date_of_birth);

const byLastName = (a, b) => b.last_name.localeCompare(a.last_name);

const sortFns = [
  // Sorted by `campus` (ascending), then by `last_name` (ascending)
  byCampusAndLastName,
  // Sorted by `date_of_birth` (ascending)
  byDob,
  // Sorted by `last_name` (descending)
  byLastName,
];

const log = records => {
  sortFns.forEach((fn, index) =>{
    console.log(`Output ${index + 1}:`)
    records
      .sort(fn)
      .forEach(r => console.log(`${r.last_name} ${r.first_name} ${r.campus} ${r.date_of_birth} ${r.favorite_color}`));
    console.log(); // Force a new line
  });
}

module.exports = log;
