<template>
  <v-container id="Store" class="fluid">
    <h1 class="flex text-uppercase" style="color:#B71C1C">Store {{section}}</h1>
    <v-container>
      <ProductList1 />
      <ProductList2 />
      </v-container>
  </v-container>
</template>

<script>
import ProductList1 from "../components/ProductList1";
import ProductList2 from "../components/ProductList2";

export default {
  name: "Store",
  components: { ProductList1, ProductList2 },
   data:function() {
    return{section:this.$route.params.section}
  },
};
</script>
