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
          >
            <v-list-item router :to="view.route">
              <v-list-item-icon>
                <v-icon>{{ view.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ view.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div><router-view /></div>
    </v-card>
  </v-app>
</template>

<script>
// import Home from "./views/Home";
// import About from "./views/About";

export default {
  name: "App",
  components: {
    // Home,
    // About
  },
  data: () => ({
    drawer: false,
    group: null,
    views: [
      { name: "Home", icon: "mdi-view-dashboard", route: "/" },
      { name: "About", icon: "mdi-help-box", route: "/about" },
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
