<template>
  <nav>
    <v-app-bar flat app>

        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Vue</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text
                color="grey"
                dark
                v-bind="attrs"
                v-on="on"
                >
                    <v-icon left>mdi-chevron-down</v-icon>
                    Menu
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="link in links"
                :key="link.text"
                router
                :to="link.route"
                >
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
        <v-btn text color="grey"> 
            <span>Sign Out</span>
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="primary" temporary v-model="drawer">  
        <v-row class="text-center">
            <v-col class="mt-9">
                <v-avatar size="100">
                    <img src="/avatar-1.jpg" alt="avatar">
                </v-avatar>      
                <p class="white--text text-subtitle-1 mt-1">
                    Henrique Yasuda
                </p>          
            </v-col>
        </v-row>
        <Popup></Popup>
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

import Popup from './Popup.vue'

export default {
    components:{
        Popup
    },

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
    },


}
</script>

<style>

</style>