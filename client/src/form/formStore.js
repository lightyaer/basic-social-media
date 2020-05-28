import Vue from 'vue';
import { reduce, cloneDeep } from 'lodash';
import formData from './formData';
import { getFormData } from './formGetterTypes';
import { clearFormData, setFormData, setFormField } from './formMutationTypes';

export default {
  state: reduce(formData, (state, value, key) => {
    state[key] = {
      formData: cloneDeep(formData[key])
    };
    return state;
  }),
  getters: {
    [getFormData]: state => key => state[key].formData
  },
  mutations: {
    [setFormData](state, { key, formData }) {
      Vue.set(state[key], 'formData', formData);
    },
    [setFormField](state, { key, field, value }) {
      Vue.set(state[key].formData, field, value);
    },
    [clearFormData](state, key) {
      Vue.set(state, key, {
        formData: formData[key]
      });
    }
  }
};
