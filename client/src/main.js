import Vue from 'vue';
import App from './app/App.vue';
import { sync } from 'vuex-router-sync';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './quasar';

sync(store, router);

window.store = store;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
