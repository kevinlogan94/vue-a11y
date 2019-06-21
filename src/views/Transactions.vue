<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Transactions Demo
          </h1>
        </div>
      </div>
    </section>
    <TransactionList />
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionList from "@/components/TransactionList.vue";

export default {
  name: "Transactions",
  components: {
    TransactionList
  }
};
</script>
