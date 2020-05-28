import Vue from 'vue';
import { castArray, some } from 'lodash';
import { setLoading } from './loadingMutationTypes.js';
import { isLoading } from './loadingGetterTypes.js';

export default {
  state: {},
  getters: {
    [isLoading]: state => keys => {
      const _keys = castArray(keys);
      return some(_keys, key => state[key]);
    }
  },
  mutations: {
    [setLoading](state, { key, value }) {
      Vue.set(state, key, value);
    }
  }
};
