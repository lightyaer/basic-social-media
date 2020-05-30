'use strict';
const { seedData } = require('./index');

seedData()
  .then(() => {
    console.log('Seeded successfully');
    process.exit();
  })
  .catch((error) => {
    console.log(error);
  });
