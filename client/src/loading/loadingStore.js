import Vue from 'vue';
import { isLoading } from './loadingGetterTypes';
import { setLoading } from './loadingMutationTypes';

export default {
  state: {},
  getters: {
    [isLoading]: state => key => state[key]
  },
  mutations: {
    [setLoading](state, { key, value }) {
      Vue.set(state, key, value);
    }
  }
};
