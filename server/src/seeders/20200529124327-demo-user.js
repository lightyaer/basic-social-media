'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});

    const userSeedPath = path.join(__dirname, '..', 'seed/users.json');
    const userJson = fs.readFileSync(userSeedPath);
    const users = JSON.parse(userJson);
    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
