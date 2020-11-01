<template>
  <v-app>
    <v-card class=" overflow-hidden flex">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-app-bar color="deep-purple accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Todo List</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute top temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Application </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            v-for="view in views"
            :key="view.name"
            link
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ view.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ view.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        <Home />
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
  data: () => ({
    drawer: false,
    group: null,
    views: [
      { name: "home", icon: "mdi-view-dashboard", compoment: "Home" },
      { name: "about", icon: "mdi-help-box", compoment: "About" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>