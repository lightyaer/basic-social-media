import Vue from 'vue';
import { hasError } from './errorGetterTypes';
import { setError } from './errorMutationTypes';

export default {
  state: {},
  getters: {
    [hasError]: state => key => state[key]
  },
  mutations: {
    [setError](state, { key, value }) {
      Vue.set(state, key, value);
    }
  }
};
