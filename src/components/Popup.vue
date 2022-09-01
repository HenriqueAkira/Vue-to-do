<template>
  <v-dialog
    
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }" >
        <div class="text-center">
            <v-btn class="text-center" color="success" dark v-on="on" v-bind="attrs">Add a new project</v-btn>
        </div>
    </template>

    <v-card >
        <v-card-title class="text-h5 grey lighten-2">
          Add a new project
        </v-card-title>

        <v-card-text>
            <v-form class="px-3">
                <v-text-field
                    prepend-icon="mdi-folder"
                    name="name"
                    label="Title"
                    id="id"
                    v-model="title"
                ></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-btn color="success mx-0 mt-3" @click="submit">Submit</v-btn>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
    </v-card>

    
  </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            title: "",
            content: ""
        }
    },

    methods: {
        submit(){
            console.log(this.title, this.content);
        }
    }

}
</script>

<style>

</style>