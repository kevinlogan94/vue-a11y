<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Semantic HTML vs non-Semantic HTML Demo
          </h1>
        </div>
      </div>
    </section>
    <SemanticButtons />
  </div>
</template>

<script>
import SemanticButtons from "@/components/SemanticButtons.vue";

export default {
  name: "semantics",
  components: {
    SemanticButtons
  }
};
</script>
