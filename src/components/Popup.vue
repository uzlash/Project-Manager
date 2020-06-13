<template>
    <V-dialog max-width="600px">
        <template v-slot:activator="{ on, attrs }">
        <v-btn color="teal white--text font-weight-light" v-bind="attrs" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2 class="font-weight-light grey--text ">Add new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Project Title" prepend-icon="mdi-folder" v-model="title"></v-text-field>
                    <v-textarea label="Project Content" prepend-icon="mdi-lead-pencil" v-model="content"></v-textarea>
                    
                    <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px">
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        
                        :value="computedDateFormatted"
                        label="Due date"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>

                    <v-btn class="teal white--text" @click="submit">Submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </V-dialog>
</template>

<script>
 import moment from 'moment';
export default {
    data: () => ({
        title: '',
        content: '',
        due: null,
        date: new Date().toISOString().substr(0, 10),
        menu: false
    }),
    methods: {
        submit() {
            console.log(this.date)
        }
    },
     computed: {
      computedDateFormatted () {
        return this.date ? moment(this.date).format('Do MMM YYYY') : ''
      },
    }
}
</script>