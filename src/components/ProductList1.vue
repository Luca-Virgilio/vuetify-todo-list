<template>
  <v-card class="ProductList1-container pa-2 ma-4">
    <v-card-title class="text-center text-h5 justify-center"
      >SaleProducts</v-card-title
    >
    <v-list dense>
      <v-list-item v-for="(product, i) in products" :key="i">
        <v-list-item-content>
          <v-col cols="8">
            <v-list-item-title v-text="product.name"></v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle>{{ product.price }}$</v-list-item-subtitle>
          </v-col>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-card-actions class="flex">
      <v-btn class="success" @click="reducePriceFy(0.5)">Reduce price</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductList1",
  computed: {
    products: {
      //getters
      get() {
        return this.$store.getters.saleProducts;
      },
      //setters
      set(newProducts) {
        this.$store.state.products = newProducts;
      },
    },
  },
  methods: {
    reducePrice: function(value) {
    // fire a mutation
     this.$store.commit('reducePrice', value);
    },
    reducePriceFy: function(value) {
    // fire an action (async request)
     this.$store.dispatch('reducePriceFy', value);
    },
  },
};
</script>

<style scoped>
.ProductList1-container {
}
</style>
