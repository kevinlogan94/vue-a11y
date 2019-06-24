<template>
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
          <button v-on:click="loadMore()" class="button is-primary">
            Load More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TransactionList",
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
