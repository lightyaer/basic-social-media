import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../user/UserView.vue';
import UserListView from '../user/list/UserListView.vue';
import UserDetailView from '../user/detail/UserDetailView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'user' }
  },
  {
    path: '/user',
    component: UserView,
    children: [
      { path: '', name: 'user', component: UserListView },
      { path: ':userId', name: 'userDetail', component: UserDetailView }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
