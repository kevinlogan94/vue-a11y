<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Loading Indicator Demo
          </h1>
        </div>
      </div>
    </section>
    <SimpleForm />
  </div>
</template>

<script>
import SimpleForm from "@/components/SimpleForm.vue";

export default {
  name: "LoadingIndicator",
  components: {
    SimpleForm
  }
};
</script>
