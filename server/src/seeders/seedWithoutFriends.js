'use strict';
require('dotenv').config();
const { seedWithoutFriends } = require('./index');

seedWithoutFriends()
  .then(() => {
    console.log('Seeded without friends');
    process.exit();
  })
  .catch((error) => {
    console.log(error);
  });
