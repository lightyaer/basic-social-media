<template>
  <BsmDataTable
    @click:row="onClickFriend"
    :headers="headers"
    :items="users"
    :loading="areFriendsLoading"
    no-data-text="User doesn't have any friends, Use Postman to add friends"
  />
</template>

<script>
import _ from 'lodash';
import headerMixins from '../../../mixins/headerMixins';
import BsmDataTable from '../../../components/BsmDataTable';
import { mapGetters } from 'vuex';
import { isLoading } from '../../../loading/loadingGetterTypes';
import { getUserAction } from '../../userActionTypes';

export default {
  name: 'FriendsList',
  props: {
    friends: {
      type: Array
    }
  },
  mixins: [headerMixins],
  components: {
    BsmDataTable
  },
  computed: {
    ...mapGetters({
      isLoading
    }),
    users() {
      return _.map(this.friends, friend => _.omit(friend, ['friendship']));
    },
    areFriendsLoading() {
      return this.isLoading(getUserAction);
    }
  },
  methods: {
    onClickFriend({ id: userId }) {
      this.$router.push({ name: 'userDetail', params: { userId } });
    }
  }
};
</script>
