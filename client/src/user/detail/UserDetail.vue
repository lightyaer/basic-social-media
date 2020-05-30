<template>
  <v-container fluid>
    <v-row align="center" class="mb-5">
      <v-col cols="2">
        <v-avatar size="80">
          <img :src="avatar" />
        </v-avatar>
      </v-col>
      <v-col>
        <v-row class="mb-2">
          <div class="display-2">{{ firstName }} {{ lastName }}</div>
        </v-row>
        <v-row>
          <div class="subtitle-2">{{ username }}</div>
        </v-row>
      </v-col>
    </v-row>
    <FriendsList :friends="friends" />
  </v-container>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import { userGetter } from '../userGetterTypes';
import FriendsList from './friends/FriendsList';

export default {
  name: 'UserDetail',
  components: {
    FriendsList
  },
  computed: {
    ...mapGetters({
      userGetter
    }),
    avatar() {
      return _.get(this.user, 'avatar', '');
    },
    firstName() {
      return _.get(this.user, 'firstName', '');
    },
    lastName() {
      return _.get(this.user, 'lastName', '');
    },
    username() {
      return _.get(this.user, 'username', '');
    },
    userId() {
      return _.get(this.$route, 'params.userId', null);
    },
    user() {
      return this.userGetter(this.userId);
    },
    friends() {
      const friends = _.get(this.user, 'friends', []);
      return _.map(friends, friend => _.omit(friend, ['friendship']));
    }
  }
};
</script>
