'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('../db/sequelize');
const { User } = require('../models/user');

const seedWithoutFriends = async () => {
  await db.drop();
  await db.sync({ force: true });
  const userSeedPath = path.join(__dirname, '..', 'seed/users.json');
  const userJson = fs.readFileSync(userSeedPath);
  const users = JSON.parse(userJson);
  await User.bulkCreate(users, {});
};

seedWithoutFriends()
  .then(() => {
    console.log('Seeded without friends');
    process.exit();
  })
  .catch((error) => {
    console.log(error);
  });
