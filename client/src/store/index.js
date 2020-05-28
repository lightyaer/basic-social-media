import Vue from 'vue';
import Vuex from 'vuex';

import { LOADING_STORE_KEY } from '../loading/loadingEnum';
import { FORM_STORE_KEY } from '../form/formEnum';
import { ERROR_STORE_KEY } from '../error/errorEnum';

import loadingStore from '../loading/loadingStore';
import formStore from '../form/formStore';
import errorStore from '../error/errorStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [LOADING_STORE_KEY]: loadingStore,
    [FORM_STORE_KEY]: formStore,
    [ERROR_STORE_KEY]: errorStore
  }
});
