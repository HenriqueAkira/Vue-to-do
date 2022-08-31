<template>
  <v-app class="main-app">
    <Navbar></Navbar>

    <v-main class="mx-4 mb-4">
      <router-view>
        
        
      </router-view>

    </v-main>
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {Navbar},
  data: () => ({
    //
  }),
};
</script>

<style >
  html .v-application--wrap{
    background-color: #F4F4F4;
  }
</style>
