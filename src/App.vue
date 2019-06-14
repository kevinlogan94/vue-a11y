<template>
  <div>
    <NavBar />
    <main>
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
  }
};
</script>

<style></style>
