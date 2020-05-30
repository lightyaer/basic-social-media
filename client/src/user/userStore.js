import Vue from 'vue';
import _ from 'lodash';
import sift from 'sift';
import { allUsersGetter, userGetter } from './userGetterTypes';
import {
  setUserMutation,
  updateUserMutation,
  removeUserMutation
} from './userMutationTypes';
import {
  getAllUsersAction,
  getUserAction,
  addFriendAction
} from './userActionTypes';
import { setLoading } from '../loading/loadingMutationTypes';
import { setError } from '../error/errorMutationTypes';
import { getAllUsersApi, getUserByIdApi, addFriendApi } from './userService';

export default {
  state: {},
  getters: {
    [allUsersGetter]: state => (sortBy = ['distance'], sortOrder = 'asc') =>
      _.orderBy(state, sortBy, sortOrder),
    [userGetter]: state => (query, getOne = false) => {
      if (_.isArray(query)) {
        return _.compact(_.map(query, id => state[id]));
      }
      if (_.isPlainObject(query)) {
        const objects = _.values(state).filter(sift(query));
        return getOne ? _.head(objects) : objects;
      }
      return state[query];
    }
  },
  mutations: {
    [setUserMutation](state, payload) {
      _.each(_.castArray(payload), entity => Vue.set(state, entity.id, entity));
    },
    [updateUserMutation](state, { id, payload }) {
      Vue.set(state, id, _.extend({}, state[id], payload));
    },
    [removeUserMutation](state, id) {
      Vue.delete(state, id);
    }
  },
  actions: {
    async [getAllUsersAction]({ commit }) {
      try {
        commit(setError, { key: getAllUsersAction, value: null });
        commit(setLoading, { key: getAllUsersAction, value: true });

        const response = await getAllUsersApi();
        const { data } = response;

        commit(setUserMutation, data);
        return data;
      } catch (error) {
        commit(setError, { key: getAllUsersAction, value: error });
      } finally {
        commit(setLoading, { key: getAllUsersAction, value: false });
      }
    },
    async [getUserAction]({ commit }, { userId }) {
      try {
        commit(setError, { key: getUserAction, value: null });
        commit(setLoading, { key: getUserAction, value: true });

        const response = await getUserByIdApi(userId);
        const { data } = response;

        commit(setUserMutation, data);
        return data;
      } catch (error) {
        commit(setError, { key: getUserAction, value: error });
      } finally {
        commit(setLoading, { key: getUserAction, value: false });
      }
    },
    async [addFriendAction]({ commit }, { userId, friendId }) {
      try {
        commit(setError, { key: addFriendAction, value: null });
        commit(setLoading, { key: addFriendAction, value: true });

        const response = await addFriendApi(userId, friendId);
        const { data } = response;

        commit(setUserMutation, data);
        return data;
      } catch (error) {
        commit(setError, { key: addFriendAction, value: error });
      } finally {
        commit(setLoading, { key: addFriendAction, value: false });
      }
    }
  }
};
