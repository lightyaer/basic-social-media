<template>
  <UserList />
</template>

<script>
import { mapActions } from 'vuex';
import { getAllUsersAction } from '../userActionTypes';
import UserList from './UserList';

export default {
  name: 'UserListView',
  components: {
    UserList
  },
  created() {
    this.getAllUsersAction();
  },
  methods: {
    ...mapActions({
      getAllUsersAction
    })
  }
};
</script>

<style></style>
