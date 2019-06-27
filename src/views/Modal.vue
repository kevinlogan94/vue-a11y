<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          Modal Prompt Demo
        </h1>

        <div id="app">
          <!-- ... -->
          <button class="button is-success" type="button" @click="openDialog">
            Open dialog
          </button>

          <a11y-dialog
            id="app-dialog"
            app-root="#app"
            dialog-root="#dialog-root"
            @dialog-ref="assignDialogRef"
          >
            <div class="dialog_form">
              <div class="dialog_form_item">
                <label>
                  <span class="label_text">Street:</span>
                  <input type="text" class="input" />
                </label>
              </div>
              <div class="dialog_form_item">
                <label>
                  <span class="label_text">City:</span>
                  <input type="text" class="input" />
                </label>
              </div>
              <div class="dialog_form_item">
                <label>
                  <span class="label_text">State:</span>
                  <input type="text" class="input" />
                </label>
              </div>
              <div class="dialog_form_item">
                <label>
                  <span class="label_text">Zip:</span>
                  <input type="text" class="input" />
                </label>
              </div>
            </div>
          </a11y-dialog>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // name: "YourComponent",

  // data: () => ({
  //   dialog: null
  // }),

  methods: {
    openDialog() {
      if (this.dialog) {
        this.dialog.show();
      }
    },

    assignDialogRef(dialog) {
      this.dialog = dialog;
    }
  }
};
</script>

<style scoped>
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
  padding: 0em 0.7em;
  border: none;
  font-size: 1em;
  line-height: 2em;
}
</style>
