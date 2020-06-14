<template>
  <div class="projects">

    <h1 class="subheading grey--text font-weight-light">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
              <div class="grey--text font-weight-bold">Due by {{ project.due }}</div>
              <div> {{ project.content }}</div> 
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aut exercitationem recusandae omnis ipsum animi ratione natus
                dicta error iste modi similique, obcaecati ab porro soluta voluptatem,
                sapiente iure odit aperiam.</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import db from "@/firebase/init"
export default {
  data: () => ({
    projects: []
  }),
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person == "Usman"
      })
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