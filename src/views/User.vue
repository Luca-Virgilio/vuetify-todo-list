<template>
  <v-container id="user" class="fluid">
    <h1 class="flex text-uppercase" style="color:#B71C1C">
      Welcome {{ user }}
    </h1>
    <v-container>
      <ProductList1 />
    </v-container>
  </v-container>
</template>

<script>
import ProductList1 from "../components/ProductList1";

export default {
  name: "Store",
  components: { ProductList1 },
  data() {
    return {
      section: "IT",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
