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
            <input type="text" class="wide_input">
          </label>
        </div>
        <div class="dialog_form_item">
          <label>
            <span class="label_text">City:</span>
            <input type="text" class="city_input">
          </label>
        </div>
        <div class="dialog_form_item">
          <label>
            <span class="label_text">State:</span>
            <input type="text" class="state_input">
          </label>
        </div>
        <div class="dialog_form_item">
          <label>
            <span class="label_text">Zip:</span>
            <input type="text" class="zip_input">
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
  name: 'YourComponent',
 
  data: () => ({
    dialog: null
  }),
 
  methods: {
    openDialog () {
      if (this.dialog) {
        this.dialog.show()
      }
    },
 
    assignDialogRef (dialog) {
      this.dialog = dialog
    }
  }
}
</script>



