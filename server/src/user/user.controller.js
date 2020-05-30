const _ = require('lodash');
const { User } = require('../models/user');

const associateFriends = {
  include: ['Friends', 'AcceptingFriends'],
};

const mergeFriends = (user) => {
  const friends = _.concat(user.Friends, user.AcceptingFriends);
  const userWithoutFriends = _.omit(user, ['Friends', 'AcceptingFriends']);
  return {
    friends,
    ...userWithoutFriends,
  };
};

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const page = _.get(req, 'query.page', 1);
      const paginate = 15;

      const options = {
        page,
        paginate,
      };

      const { docs, pages, total } = await User.paginate(options);

      return res.status(200).send({ docs, pages, total });
    } catch (error) {
      next(error);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const userId = _.get(req, 'params.userId', null);
      if (!userId)
        return res.status(400).send({ msg: 'User is required to get friends' });

      const user = await User.findByPk(userId, associateFriends);
      if (!user) res.status(400).send({ msg: 'User does not exist' });
      const userWithFriends = mergeFriends(user.toJSON());
      return res.status(200).send(userWithFriends);
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const firstName = _.get(req, 'body.firstName', '');
      const lastName = _.get(req, 'body.lastName', '');
      const username = _.get(req, 'body.username', '');
      const avatar = _.get(req, 'body.avatar', '');

      const user = await User.create({
        firstName,
        lastName,
        username,
        avatar,
      });

      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  deleteFriend: async (req, res, next) => {
    try {
      const userId = _.get(req, 'query.userId', null);
      const friendId = _.get(req, 'query.friendId', null);

      const requestingUser = await User.findByPk(userId, {
        include: ['Friends', 'AcceptingFriends'],
      });

      const acceptingUser = await User.findByPk(friendId, {
        include: ['Friends', 'AcceptingFriends'],
      });

      await requestingUser.removeFriend(acceptingUser);

      await requestingUser.reload();
      await acceptingUser.reload();

      const requestingUserMerged = mergeFriends(requestingUser.toJSON());
      const acceptingUserMerged = mergeFriends(acceptingUser.toJSON());

      res.status(200).send([requestingUserMerged, acceptingUserMerged]);
    } catch (error) {
      next(error);
    }
  },
  addFriend: async (req, res, next) => {
    try {
      const userId = _.get(req, 'body.userId', null);
      const friendId = _.get(req, 'body.friendId', null);

      const requestingUser = await User.findByPk(userId, {
        include: ['Friends', 'AcceptingFriends'],
      });
      const acceptingUser = await User.findByPk(friendId, {
        include: ['Friends', 'AcceptingFriends'],
      });
      await requestingUser.addFriend(acceptingUser);

      await requestingUser.reload();
      await acceptingUser.reload();

      const requestingUserMerged = mergeFriends(requestingUser.toJSON());
      const acceptingUserMerged = mergeFriends(acceptingUser.toJSON());

      res.status(200).send([requestingUserMerged, acceptingUserMerged]);
    } catch (error) {
      next(error);
    }
  },
};
