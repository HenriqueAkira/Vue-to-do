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
            <v-form class="px-3" ref="form">
                <v-text-field
                    :rules="inputRules"
                    prepend-icon="mdi-folder"
                    name="name"
                    label="Title"
                    id="id"
                    v-model="title"
                ></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
            </v-form>
            
            <v-menu max-width="290">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :rules="inputRules"
                        :value="formattedDate"
                        label="Due date"
                        prepend-icon="mdi-calendar"
                        v-on="on"
                        v-bind="attrs"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="due" ></v-date-picker>   
            </v-menu>
            <v-btn color="success mx-0 mt-3" @click="submit">Submit</v-btn>

        </v-card-text>
        

        <v-divider></v-divider>

    </v-card>

    
  </v-dialog>
</template>

<script>
import db from "@/fb";
export default {

    data(){
        return{
            title: "",
            content: "",
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimun length is 3 characters'
            ]
        }
    },

    methods: {
        submit(){
            if(this.$refs.form.validate()){
                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.due,
                    person: "One person",
                    status: "ongoing"
                }

                db.collection('projects').add(project).then(() => {console.log("aa");})
            }else alert("Err")
        }
    },

    computed:{
        formattedDate() {
            return this.due ? new Date(this.due).toUTCString().substring(0,16) : '' 
        }
    }

}
</script>

<style>

</style>