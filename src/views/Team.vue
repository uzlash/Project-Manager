<template>
    <div class="team">
        <h1 class="subheading grey--text font-weight-light">Team</h1>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="80" class="grey lighten-2">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="headline font-weight-light">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined color="grey">
                                <v-icon small left>mdi-message-bulleted</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
      team: [
                { name: "Ace", role: "Front End Developer", avatar: "/avatar-1.png"},
                { name: "Icegirl", role: "Javascript Developer", avatar: "/avatar-2.png"},
                { name: "Usman", role: "React Developer", avatar: "/avatar-3.png"},
                { name: "Ussy", role: "Vue.js Developer", avatar: "/avatar-4.png"},
                { name: "Uzlash", role: "Web Developer", avatar: "/avatar-5.png"},
                { name: "Uzee", role: "Software Engineer", avatar: "/avatar-6.png"}
            ]
  })
}
</script>