<template>
  <div>
    <NavBar />
    <main tabindex="-1" ref="main">
      <router-view />
    </main>
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

  data: () => ({
    dialog: null
  }),

  methods: {
    assignDialogReference(dialog) {
      this.dialog = dialog;
    },

    openMainDialog() {
      if (this.dialog) {
        this.dialog.show();
      }
    }
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

.dialog_form {
  text-align: left;
}

#app-dialog dialog button {
background-color: #23d160;
padding: 0em .7em;
border: none;
font-size: 1em;
line-height: 2em;
}

.page-spacer {
  height: 200vh;
  display: block;
}
.ScreenReader {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
section.accessible, section.not-accessible {
  padding: 1em;
  margin: .5em 0
}
figure {
margin: 2em 0 3em 0 !important;
  padding: 1em!important;
    background-color: #E8E8E8;
}
figcaption {
font-weight: bold;
margin-top: -2.25em;
margin-left: -1em;
margin-bottom: .7em;
}
</style>
