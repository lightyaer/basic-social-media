import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './app/App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

sync(store, router);

window.store = store;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
