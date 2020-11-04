<template>
  <v-card class="ProductList2-container ma-4 pa-2">
    <v-card-title class="text-center text-h5 justify-center"
      >ProductList</v-card-title
    >
    <v-container class="fluid">
      <v-row>
        <v-col cols="6" md="4" v-for="product in products" :key="product.name">
          <v-card max-width="350">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="100px"
            ></v-img>

            <v-card-title class="flex">
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle class="flex">
              {{ product.price }}$
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ProductList2",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
