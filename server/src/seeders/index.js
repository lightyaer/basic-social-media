'use strict';
require('dotenv').config();
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const db = require('../db/sequelize');
const { User } = require('../models/user');

const seedData = async () => {
  await db.drop();
  await db.sync({ force: true });
  const userSeedPath = path.join(__dirname, '..', 'seed/users.json');
  const userJson = fs.readFileSync(userSeedPath);
  const users = JSON.parse(userJson);

  await User.sync({ force: true });
  let savedUsers = await User.bulkCreate(users, {});
  await Promise.all(
    _.map(savedUsers, async (user, index, arr) => {
      if (index - 2 < arr.length) {
        await user.addFriend(arr[index + 1]);
      }
    })
  );
};

const seedWithoutFriends = async () => {
  await db.drop();
  await db.sync({ force: true });
  const userSeedPath = path.join(__dirname, '..', 'seed/users.json');
  const userJson = fs.readFileSync(userSeedPath);
  const users = JSON.parse(userJson);
  await User.bulkCreate(users, {});
};

module.exports = {
  seedData,
  seedWithoutFriends,
};
