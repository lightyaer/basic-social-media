<template>
  <v-app>
    <v-app-bar app dense color="primary" dark>
      <v-toolbar-title @click="gotoList">Basic Social Media</v-toolbar-title>
      <v-spacer />
      <v-btn :disabled="isCurrentRouteUserList" @click="gotoList" text>
        <span>Go to list</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="px-4">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isCurrentRouteUserList() {
      return this.$route.name === 'user';
    }
  },
  methods: {
    gotoList() {
      if (this.$route.name !== 'user') this.$router.push({ name: 'user' });
    }
  }
};
</script>
