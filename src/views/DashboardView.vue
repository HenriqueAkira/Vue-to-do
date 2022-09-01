<template>

  <div class="dashboard">

    <h1 class="subtitle-1 grey--text" >Dashboard</h1>

    <v-container fluid class="my-9 pa-16">

      <v-row class="mb-9">

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed class="mr-5 grey--text" @click="sortBy('title')"  v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn small depressed class="mr-5 grey--text" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
              
          </template>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-row>
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`" align="center">
          <v-col cols="12" md="6" >
              <div class="caption grey--text">Project title</div>
              <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
              <div class="caption grey--text">Person</div>
              <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
              <div class="caption grey--text">Due by</div>
              <div>{{project.due}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div id="chip" class="text-right"> 
              <v-chip :class="`white--text caption ${project.status}`" >{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>

    <!-- <v-btn class="hidden-md">Click me</v-btn>
    <v-btn class="hidden-md-and-up">Click me</v-btn>
    <v-btn class="hidden-sm-only">Click me</v-btn> -->

    <!-- 
    
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn depressed color="pink">Click me</v-btn>
    <v-btn color="pink" text>Click me</v-btn>

    <v-btn depressed class="pink white--text" small>
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed class="pink white--text" large>
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed dark color="purple " small>
      <v-icon>mdi-heart</v-icon>
    </v-btn> -->


  </div>

</template>

<script>

  export default {
    name: 'Home',

    components: {
    },

    data() {
      return{
        ascending: false,

        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Hode up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
      }
    },

    methods: {
      sortBy(prop){
        if(!this.ascending){
          this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
          this.ascending = true
        }else{
          this.projects.sort((a,b)=> a[prop] < b[prop] ? 1 : -1)
          this.ascending = false
        }
      }
    }
  }
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }

  #chip .v-chip.complete{
    background: #3cd1c2;
  }
  #chip .v-chip.ongoing{
    background: #ffaa2c;
  }
  #chip .v-chip.overdue{
    background: #f83e70;
  }
</style>