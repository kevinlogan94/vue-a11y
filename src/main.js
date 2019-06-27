import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/main.scss";
import VueA11yDialog from "vue-a11y-dialog";
import VueSkipTo from "vue-skip-to";

Vue.config.productionTip = false;

Vue.use(VueA11yDialog);
Vue.use(VueSkipTo);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
