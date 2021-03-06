const express = require('express');
const router = express.Router();
const {
  createUser,
  addFriend,
  getAllUsers,
  getUserById,
  deleteFriend,
} = require('./user.controller');

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:userId', getUserById);

router.post('/friend', addFriend);

router.delete('/friend', deleteFriend);

module.exports = {
  router,
};
