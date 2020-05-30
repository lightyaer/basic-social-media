<template>
  <v-data-table
    v-on="$listeners"
    v-bind="$attrs"
    :items-per-page="15"
    class="elevation-1"
  >
    <template v-slot:item.createdAt="{ item }">
      <div class="font-weight-light" dark>{{ getDateString(item) }}</div>
    </template>

    <template v-slot:item.updatedAt="{ item }">
      <div class="font-weight-light" dark>{{ getDateString(item) }}</div>
    </template>

    <template v-slot:item.avatar="{ item }">
      <v-avatar>
        <img :src="item.avatar" alt="avatar" />
      </v-avatar>
    </template>
  </v-data-table>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BsmDataTable',
  methods: {
    getDateString(date) {
      return moment(date).fromNow();
    }
  }
};
</script>
