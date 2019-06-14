import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/transactions",
      name: "transactions",
            // route level code-splitting
      // this generates a separate chunk (transactions.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "transactions" */"./views/Transactions.vue")
    },
    {
      path: "/modal",
      name: "modal",
      component: () => import("./views/Modal.vue")
    },
    {
      path: "/loadingIndicator",
      name: "loadingIndicator",
      component: () => import("./views/LoadingIndicator.vue")
    },
    {
      path: "/image",
      name: "image",
      component: () => import("./views/Image.vue")
    },
    {
      path: "/semantics",
      name: "semantics",
      component: () => import("./views/Semantics.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log("to", to);
  // console.log("from", from);
  next();
});

export default router;
