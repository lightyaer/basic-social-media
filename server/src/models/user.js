const db = require('../db/sequelize');
const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
  },
});

User.belongsToMany(User, {
  as: 'Friends',
  through: 'friendship',
  foreignKey: 'UserId',
});

User.belongsToMany(User, {
  as: 'AcceptingFriends',
  through: 'friendship',
  foreignKey: 'FriendId',
});

sequelizePaginate.paginate(User);

module.exports = {
  User,
};
