<template>
    <div>
        <nav>
            <v-app-bar flat app>
                <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="grey--text text-uppercase">
                    <span class="font-weight-light">Project</span>
                    <span>Manager</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn outlined color="grey">
                    <span>Sign Out</span>
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer app absolute class="blue lighten-2" v-model="drawer">
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
export default {
    data: () => ({
        drawer: true,
        links: [
            {icon: "mdi-view-dashboard", text: "Dashboard", route: "/"},
            {icon: "mdi-folder", text: "My Projects", route: "/projects"},
            {icon: "mdi-account", text: "Team", route: "/team"}
        ]
    })
}
</script>