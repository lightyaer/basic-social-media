import { initAppAction } from './appActionTypes';
import { setLoading } from '../loading/loadingMutationTypes';

export default {
  actions: {
    [initAppAction]({ commit }) {
      try {
        commit(setLoading, { key: initAppAction, value: true });
      } catch (error) {
        commit(setLoading, { key: initAppAction, value: true });
      } finally {
        commit(setLoading, { key: initAppAction, value: false });
      }
    }
  }
};
