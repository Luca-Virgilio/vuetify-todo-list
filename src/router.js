import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import { store } from "./store/store";

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
      path: "/store/:section",
      name: "store",
      // query and params are props.
      // for decoupling components
      props: true,
      //lazy-loaded code splitting
      //this generates separate chunk for this route.
      // which is lazy-loaded when the route is visited
      component: () =>
        import(/* webpackChunkName: "store" */ "./views/Store.vue"),
      children: [
        {
          path: "product/:name",
          name: "productDetails",
          props: true,
          component: () =>
            import(
              /* webpackChunkName: "store" */ "./components/ProductDetails.vue"
            ),
            beforeEnter: (to, from, next) => {
              const exist = store.state.products.find(
                (product) => product.name === to.params.name
              );
              exist ? next() : next({ name: "notFound" });
            },
        },
      ],
      beforeEnter: (to, from, next) => {
        const exist = store.state.sections.find(
          (section) => section === to.params.section
        );
        exist ? next() : next({ name: "notFound" });
      },
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/404",
      // alias is used for *
      //* rappresents all routes
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkname "notFound" */ "./views/notFound.vue"),
    },
  ],
});
