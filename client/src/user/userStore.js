import Vue from 'vue';
import _ from 'lodash';
import {
  allUsersGetter,
  userGetter,
  getTotalDocs,
  getTotalPages
} from './userGetterTypes';
import {
  setUserMutation,
  updateUserMutation,
  removeUserMutation,
  setTotalPages,
  setTotalDocs
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
    [allUsersGetter]: state => (sortBy = ['id'], sortOrder = 'asc') =>
      _.orderBy(_.omit(state, ['totalPages', 'totalDocs']), sortBy, sortOrder),
    [userGetter]: state => query => {
      return state[query];
    },
    [getTotalDocs]: state => _.get(state, 'totalDocs', 0),
    [getTotalPages]: state => _.get(state, 'totalPages', 1)
  },
  mutations: {
    [setUserMutation](state, payload) {
      _.each(state, entity => Vue.delete(state, entity.id));
      _.each(_.castArray(payload), entity => Vue.set(state, entity.id, entity));
    },
    [updateUserMutation](state, { id, payload }) {
      Vue.set(state, id, _.extend({}, state[id], payload));
    },
    [removeUserMutation](state, id) {
      Vue.delete(state, id);
    },
    [setTotalPages](state, totalPages) {
      Vue.set(state, 'totalPages', totalPages);
    },
    [setTotalDocs](state, totalDocs) {
      Vue.set(state, 'totalDocs', totalDocs);
    }
  },
  actions: {
    async [getAllUsersAction]({ commit }, { page }) {
      try {
        commit(setError, { key: getAllUsersAction, value: null });
        commit(setLoading, { key: getAllUsersAction, value: true });

        const response = await getAllUsersApi(page);
        const { data } = response;
        const { docs, total, pages } = data;
        commit(setUserMutation, docs);
        commit(setTotalDocs, total);
        commit(setTotalPages, pages);
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
