import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bulma/css/bulma.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import VueA11yDialog from "vue-a11y-dialog";

Vue.use(VueA11yDialog);

// import Vue from 'vue'
import VueSkipTo from "vue-skip-to";

Vue.use(VueSkipTo);
