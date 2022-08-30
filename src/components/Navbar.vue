<template>
  <nav>
    <v-toolbar flat app>

        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Vue</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn text color="grey"> 
            <span>Sign Out</span>
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer app class="indigo" temporary v-model="drawer">  
        <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    },
    methods:{
    }

}
</script>

<style>

</style>