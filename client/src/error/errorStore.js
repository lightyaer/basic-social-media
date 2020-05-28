import Vue from 'vue';
import { each, keys } from 'lodash';
import { clearAllErrors, setError } from './errorMutationTypes.js';
import { getAllErrors, hasError } from './errorGetterTypes.js';

export default {
  state: {},
  getters: {
    [hasError]: state => key => state[key],
    [getAllErrors]: state => state
  },
  mutations: {
    [setError](state, { key, value }) {
      Vue.set(state, key, value);
    },
    [clearAllErrors](state) {
      each(keys(state), key => {
        Vue.set(state, key, null);
      });
    }
  }
};
