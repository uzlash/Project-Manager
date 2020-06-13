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

export default {
  data: () => ({
    projects: [
      {title: "Update upwork profile", person: "Ace", due: "16th january 2020", status: "Overdue"},
      {title: "Create vue based portfolio", person: "Usman", due: "15th june 2020", status: "Pending"},
      {title: "Code up additional vuetify dashboards", person: "Uzlash", due: "30th june 2020", status: "Ongoing"},
      {title: "Submit module for code review", person: "Iceguy", due: "7th june 2020", status: "Completed"}
      
    ]
    // projects: [
    //   {title: "Design", person: "The Net Ninja", due: "30th june 2020", status: "Ongoing"},
    //   {title: "Code", person: "Chun Li", due: "16th january 2020", status: "Overdue"},
    //   {title: "Designers", person: "Ryu", due: "7th june 2020", status: "Completed"},
    //   {title: "Create", person: "Gouken", due: "15th june 2020", status: "Pending"}      
    // ]
  }),
  methods: {
    sortBy(property) {
      this.projects.sort( (a, b) => a[property] < b[property] ? -1 : 1);
    }
  }
}
</script>

<style>
.project.Pending {
  border-left: solid 4px #9E9E9E;
}
.project.Ongoing {
  border-left: solid 4px #2196F3;
}
.project.Completed {
  border-left: solid 4px #4CAF50;
}
.project.Overdue {
  border-left: solid 4px #F44336;
}
.v-chip.Pending {
  background: #9E9E9E !important;
}
.v-chip.Ongoing {
  background: #2196F3 !important;
}
.v-chip.Completed {
  background: #4CAF50 !important;
}
.v-chip.Overdue {
  background: #F44336 !important;
}
</style>