<template>
  <nav class="navbar has-shadow is-spaced ">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/kevinlogan94/vue-a11y">
          <img src="../assets/github.png" alt="vue-a11y repository" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isHamburgerMenuActive = !isHamburgerMenuActive"
          v-bind:class="{ 'is-active': isHamburgerMenuActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbar"
        class="navbar-menu"
        v-bind:class="{ 'is-active': isHamburgerMenuActive }"
      >
        <div
          class="navbar-start"
          v-on:click="isHamburgerMenuActive = !isHamburgerMenuActive"
        >
          <router-link role="button" class="navbar-item" to="/"
            >Home</router-link
          >
          <router-link role="button" class="navbar-item" to="/transactions"
            >Transactions</router-link
          >
          <router-link role="button" class="navbar-item" to="/modal"
            >Modal</router-link
          >
          <router-link role="button" class="navbar-item" to="/loadingIndicator"
            >Loading Indicator</router-link
          >
          <router-link role="button" class="navbar-item" to="/Image"
            >Image</router-link
          >
          <router-link role="button" class="navbar-item" to="/semantics"
            >Semantics</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isHamburgerMenuActive: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
