<template>
  <BsmDataTable
    @click:row="onClickUser"
    :headers="headers"
    :items="items"
    :loading="areUsersLoading"
  />
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import { allUsersGetter } from '../userGetterTypes';
import { getAllUsersAction } from '../userActionTypes';
import { isLoading } from '../../loading/loadingGetterTypes';
import BsmDataTable from '../../components/BsmDataTable';
import headerMixin from '../../mixins/headerMixins';

export default {
  name: 'UserList',
  components: {
    BsmDataTable
  },
  mixins: [headerMixin],
  computed: {
    ...mapGetters({
      allUsersGetter,
      isLoading
    }),
    users() {
      return this.allUsersGetter();
    },
    areUsersLoading() {
      return this.isLoading(getAllUsersAction);
    },
    items() {
      return this.users;
    }
  },
  methods: {
    getDateString(date) {
      return moment(date).fromNow();
    },
    onClickUser({ id: userId }) {
      this.$router.push({ name: 'userDetail', params: { userId } });
    }
  }
};
</script>

<style></style>
