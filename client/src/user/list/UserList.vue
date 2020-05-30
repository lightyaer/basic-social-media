<template>
  <BsmDataTable
    @click:row="onClickUser"
    :headers="headers"
    :options.sync="options"
    :server-items-length="totalUsers"
    :items="items"
    no-data-text="No users"
    :loading="areUsersLoading"
  />
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';
import { allUsersGetter, getTotalDocs } from '../userGetterTypes';
import { getAllUsersAction } from '../userActionTypes';
import { isLoading } from '../../loading/loadingGetterTypes';
import BsmDataTable from '../../components/BsmDataTable';
import headerMixin from '../../mixins/headerMixins';

export default {
  name: 'UserList',
  components: {
    BsmDataTable
  },
  watch: {
    options: {
      handler({ page }) {
        this.getAllUsersAction({ page });
      },
      deep: true
    }
  },
  mixins: [headerMixin],
  data() {
    return {
      options: {}
    };
  },
  computed: {
    ...mapGetters({
      allUsersGetter,
      isLoading,
      getTotalDocs
    }),
    totalUsers() {
      return this.getTotalDocs;
    },
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
    ...mapActions({
      getAllUsersAction
    }),
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
