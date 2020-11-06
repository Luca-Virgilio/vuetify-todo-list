<template>
  <div class="navbar-container">
    <v-toolbar flat dense app dark color="deep-purple darken-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo List</span>
      </v-toolbar-title>
        <v-spacer></v-spacer>
      <span v-if="isLogged">
        <v-btn icon @click="logout">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </span>
    </v-toolbar>

    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-app-bar> -->

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
          <!-- params :key="$route.path" reload the component when change path-->
          <v-list-item
            router
            :to="{ name: view.component, params: view.params }"
            :key="$route.path"
          >
            <v-list-item-icon>
              <v-icon>{{ view.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ view.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
    views: [
      {
        name: "Home",
        icon: "mdi-view-dashboard",
        route: "/",
        component: "home",
      },
      {
        name: "Store",
        icon: "mdi-store",
        route: "/store",
        component: "store",
        params: { section: "IT" },
      },
      {
        name: "Admin",
        icon: "mdi-account",
        route: "/user",
        component: "user",
      },
      {
        name: "About",
        icon: "mdi-help-box",
        route: "/about",
        component: "about",
      },
    ],
  }),
  computed: {
    isLogged: function() {
      const val = this.$store.state.user ? true : false;
      return val;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch('doLogout');
      this.$router.push({ name: "home" });
    },
  },
};
</script>
