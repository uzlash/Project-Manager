<template>
    <div>
        <nav>

            <v-snackbar v-model="snackbar" :timeout="4000" top color="teal">Project added successfully.
                <v-btn outlined color="white" @click="snackbar = false">Close</v-btn>
            </v-snackbar>
            <v-app-bar flat app>
                <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="grey--text text-uppercase">
                    <span class="font-weight-light">Project</span>
                    <span>Manager</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn outlined v-bind="attrs" v-on="on" class="grey--text mr-3">
                            <v-icon left>mdi-arrow-down</v-icon>
                            <span>Menu</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn outlined color="grey">
                    <span>Sign Out</span>
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer app class="blue lighten-2" v-model="drawer">
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="80">
                            <img src="/avatar-3.png">
                        </v-avatar>
                    <p class="white--text subheading mt-3 text-center">Usman</p>
                    </v-flex>
                    <v-flex class="my-3">
                        <Popup @ProjectAdded="snackbar = true" />
                    </v-flex>
                </v-layout>
                <v-list>
                    <v-list-item-group>
                        <v-list-item router :to="link.route" v-for="link in links" :key="link.text">
                            <v-list-item-icon>
                                <v-icon class="white--text"> {{ link.icon }} </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="white--text"> {{ link.text }} </v-list-item-title> 
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>    
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
import Popup from "./Popup"
export default {
    components: { Popup },
    data: () => ({
        drawer: true,
        snackbar: false,
        links: [
            {icon: "mdi-view-dashboard", text: "Dashboard", route: "/"},
            {icon: "mdi-folder", text: "My Projects", route: "/projects"},
            {icon: "mdi-account", text: "Team", route: "/team"}
        ]
    })
}
</script>