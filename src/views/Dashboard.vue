<template>
  <div class="dashboard">
    <h1 class="subheading grey--text font-weight-light">Dashboard</h1>
    <v-container class="my-5">

    

      <v-layout row class="mb-3" @click='sortBy("title")'>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined small class="mx-3 grey--text" dark v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span></v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined small class="mx-3 grey--text" dark v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span></v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>

      </v-layout>
      <v-card class="px-3" flat v-for="(project, index) in projects" :key="index">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due Date</div>
            <div> {{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip :class="`${project.status} white--text caption my-2`" :color="`${project.status}`" small>{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/firebase/init';
export default {
  data: () => ({
    projects: []
  }),
  methods: {
    sortBy(property) {
      this.projects.sort( (a, b) => a[property] < b[property] ? -1 : 1);
    }
  },

  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        if(change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }        
      });
    })
  }
}
</script>

<style>
.project.pending {
  border-left: solid 4px #9E9E9E;
}
.project.ongoing {
  border-left: solid 4px #2196F3;
}
.project.completed {
  border-left: solid 4px #4CAF50;
}
.project.overdue {
  border-left: solid 4px #F44336;
}
.v-chip.pending {
  background: #9E9E9E !important;
}
.v-chip.ongoing {
  background: #2196F3 !important;
}
.v-chip.completed {
  background: #4CAF50 !important;
}
.v-chip.overdue {
  background: #F44336 !important;
}
</style>