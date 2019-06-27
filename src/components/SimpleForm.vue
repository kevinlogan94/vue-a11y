<template>
  <section class="section">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
          <div class="field">
            <label class="label" for="nameInput">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                id="nameInput"
                placeholder="Enter your name."
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button
                class="button is-success"
                v-bind:class="{ 'is-loading': isLoading }"
                v-on:click="loading()"
              >
                Submit
              </button>
              <span
                role="alert"
                class="accessibilityText"
                aria-live="assertive"
                >{{ loadingVerbiage }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SimpleForm",
  data: function() {
    return {
      isLoading: false,
      loadingVerbiage: ""
    };
  },
  methods: {
    loading: function() {
      this.isLoading = true;
      this.loadingVerbiage = "Loading!";
      setTimeout(() => {
        this.isLoading = false;
        this.loadingVerbiage = "Loading Complete!";
      }, 2000);
    }
  }
};
</script>

<style scoped>
.accessibilityText {
  /* 
     Have to use opacity: 0; rather than display: none; since role="alert" 
     elements aren't triggered when they are hidden.
   */
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
