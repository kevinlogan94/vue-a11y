<template>
  <div>
    <span id="BackToTop"></span>
    <vue-skip-to to="#main" text="Skip to main content" />
    <NavBar />
    <main tabindex="-1" ref="main" id="main">
      <router-view />
    </main>
    <vue-skip-to to="#BackToTop" text="Back to top" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  // https://stackoverflow.com/questions/46402809/vuejs-event-on-route-change
  // https://marcus.io/blog/accessible-routing-vuejs
  watch: {
    //On route change
    $route() {
      // wait for the DOM to be loaded then trigger this.
      this.$nextTick(function() {
        this.$refs.main.focus();
      });
    }
  }
};
</script>
