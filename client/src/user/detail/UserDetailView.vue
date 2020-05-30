<template>
  <UserDetail />
</template>

<script>
import _ from 'lodash';
import { mapActions } from 'vuex';
import { getUserAction } from '../userActionTypes';
import UserDetail from './UserDetail';

export default {
  name: 'UserDetailView',
  components: {
    UserDetail
  },
  created() {
    if (this.userId) this.getUserAction({ userId: this.userId });
  },
  watch: {
    $route(to) {
      const userId = _.get(to, 'params.userId', null);
      if (userId) this.getUserAction({ userId });
    }
  },
  computed: {
    userId() {
      return _.get(this.$route, 'params.userId', null);
    }
  },
  methods: {
    ...mapActions({
      getUserAction
    })
  }
};
</script>

<style></style>
