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

<style>
#app-dialog dialog button {
  background-color: #23d160;
  padding: 0em 0.7em;
  border: none;
  font-size: 1em;
  line-height: 2em;
}
#app-dialog[aria-hidden^="true"] {
  background-color: transparent;
}
#app-dialog:not([aria-hidden^="true"]) {
  background-color: #0006;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
}

#app-dialog dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: right;
}
</style>
