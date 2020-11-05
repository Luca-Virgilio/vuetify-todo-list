import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/store",
      name: "store",
      //lazy-loaded code splitting
      //this generates separate chunk for this route.
      // which is lazy-loaded when the route is visited
      component: () =>
        import(/* webpackChunkName: "store" */ "./views/Store.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
  ],
});
