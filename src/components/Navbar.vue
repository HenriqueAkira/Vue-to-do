<template>
  <nav>
    <v-app-bar flat app>

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
    </v-app-bar>

    <v-navigation-drawer app class="primary" temporary v-model="drawer">  
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route:'/'},
                {icon: 'mdi-folder', text: 'My Projects', route:'/projects'},
                {icon: 'mdi-account-group', text: 'Team', route:'/team'},
            ]
        }
    },
    methods:{
    }

}
</script>

<style>

</style>