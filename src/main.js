import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bulma/css/bulma.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import VueA11yDialog from 'vue-a11y-dialog'
 
Vue.use(VueA11yDialog)

$("#skiptomain").click(function() {
  var skipTo = "#" + this.href.split("#")[1];
  $(skipTo)
    .attr("tabindex", -1)
    .on("blur focusout", function() {
      $(this).removeAttr("tabindex");
    })
    .focus();
  $("html, body").animate({ scrollTop: $("#start").offset().top }, 1000);
  return false;
  event.preventDefault();
});

$("#skiptotop").click(function() {
  $("html, body").animate({ scrollTop: $("#skiptomain").offset().top }, 1000);
  var skipTo = "#" + this.href.split("#")[1];
  $(skipTo)
    .attr("tabindex", -1)
    .on("blur focusout", function() {
      $(this).removeAttr("tabindex");
    })
    .focus();
  return false;
});
