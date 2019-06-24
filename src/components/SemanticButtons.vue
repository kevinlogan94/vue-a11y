<template>
  <div>
    <section class="section">
      <div class="container">
        <h3 class="title">
          Semantic HTML
        </h3>
        <button class="button is-primary" v-on:click="buttonClick()">
          Click Me!
        </button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title">
          non-Semantic HTML
        </h3>
        <div class="button is-primary" v-on:click="buttonClick()">
          Click Me!
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title">
          non-Semantic HTML with accessibility attributes
        </h3>
        <div
          role="button"
          tabindex="0"
          class="button is-primary"
          v-on:click="buttonClick()"
          v-on:keydown="handleBtnKeyDown($event)"
        >
          Click Me!
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SemanticButtons",
  methods: {
    buttonClick: function() {
      alert("Congratulations!");
    },
    handleBtnKeyDown: function(event) {
      // Check to see if space or enter were pressed
      if (
        event.key === " " ||
        event.key === "Enter" ||
        event.key === "Spacebar"
      ) {
        // "Spacebar" for IE11 support
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault();
        this.buttonClick();
      }
    }
  }
};
</script>
