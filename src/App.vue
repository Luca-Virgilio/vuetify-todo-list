<template>
  <v-app>
    <v-card class=" overflow-hidden flex">
      <Navbar/>
      <div><router-view /></div>
    </v-card>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
// import About from "./views/About";

export default {
  name: "App",
  components: {
    Navbar
  },
  // data: () => ({
  //   drawer: false,
  //   group: null,
  //   views: [
  //     { name: "Home", icon: "mdi-view-dashboard", route: "/" },
  //     { name: "About", icon: "mdi-help-box", route: "/about" },
  //   ],
  // }),

  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
};
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
