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
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <ul class="list is-hoverable">
              <li
                class="list-item"
                v-for="transaction in transactions"
                v-bind:key="transaction.id"
                v-bind:ref="'transaction' + transaction.id"
                tabindex="-1"
              >
                {{ transaction.payee }}
                <span class="is-pulled-right">{{ transaction.amount }}</span>
              </li>
            </ul>
            <button v-on:click="loadMore()" class="button is-success">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "transactions",
  data() {
    return {
      transactionToFocus: 0,
      focusNewestTransaction: false,
      transactions: [],
      payees: ["Johnny Silverhand", "Microtech", "IEC", "V"]
    };
  },
  mounted() {
    this.generateTransactionData();
  },
  updated() {
    if (this.focusNewestTransaction) {
      this.$refs[this.transactionToFocus][0].focus();
    }
  },
  methods: {
    loadMore() {
      this.focusNewestTransaction = true;
      this.generateTransactionData();
    },
    generateTransactionData() {
      let length = this.transactions.length;
      this.transactionToFocus = "transaction" + length;
      for (let i = length; i < length + 10; i++) {
        let amount = "$" + this.getRandomInt(100) + ".00";
        this.transactions.push({
          id: i,
          payee: this.payees[this.getRandomInt(4)],
          amount: amount
        });
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
};
</script>
