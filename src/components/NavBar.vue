<template>
  <nav class="navbar has-shadow is-spaced ">
    <a href="#start" id="skiptomain" class="ScreenReader">Skip Navigation</a>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../assets/logo.png" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
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
          <router-link role="button" class="navbar-item" to="/SkipLinks"
            >Skip Links</router-link
          >          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
