import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "vue-a11y" }
    },
    {
      path: "/transactions",
      name: "transactions",
      // route level code-splitting
      // this generates a separate chunk (transactions.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "transactions" */ "./views/Transactions.vue"),
      meta: { title: "Transactions Demo" }
    },
    {
      path: "/modal",
      name: "modal",
      component: () => import("./views/Modal.vue"),
      meta: { title: "Modal Demo" }
    },
    {
      path: "/loadingIndicator",
      name: "loadingIndicator",
      component: () => import("./views/LoadingIndicator.vue"),
      meta: { title: "Loading Indicator Demo" }
    },
    {
      path: "/image",
      name: "image",
      component: () => import("./views/Image.vue"),
      meta: { title: "Image Demo" }
    },
    {
      path: "/semantics",
      name: "semantics",
      component: () => import("./views/Semantics.vue"),
      meta: { title: "Semantics Demo" }
    }
  ]
});
// https://github.com/vuejs/vue-router/issues/914
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
