import Vue from 'vue';
import Vuex from 'vuex';
import { LOADING_STORE_KEY } from '../loading/loadingEnum';
import loadingStore from '../loading/loadingStore';
import { ERROR_STORE_KEY } from '../error/errorEnum';
import errorStore from '../error/errorStore';
import { USER_STORE_KEY } from '../user/userEnum';
import userStore from '../user/userStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [LOADING_STORE_KEY]: loadingStore,
    [ERROR_STORE_KEY]: errorStore,
    [USER_STORE_KEY]: userStore
  }
});
