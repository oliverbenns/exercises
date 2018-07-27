const files = [
  {
    name: 'comma.txt',
    delimiter: ',',
    keys: ['last_name', 'first_name', 'campus', 'favorite_color', 'date_of_birth'],
  },
  {
    name: 'dollar.txt',
    delimiter: '$',
    keys: ['last_name', 'first_name', 'middle_initial', 'campus', 'date_of_birth', 'favorite_color'],
  },
  {
    name: 'pipe.txt',
    delimiter: '|',
    keys: ['last_name', 'first_name', 'middle_initial', 'campus', 'favorite_color', 'date_of_birth'],
  },
];

module.exports = files;
