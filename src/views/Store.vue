<template>
  <v-container id="Store" class="fluid">
    <h1 class="flex text-uppercase" style="color:#B71C1C">Store {{section}}</h1>
    <v-container>
      <ProductList2 :section="section"/>
      </v-container>
  </v-container>
</template>

<script>
import ProductList2 from "../components/ProductList2";

export default {
  name: "Store",
  components: { ProductList2 },
  props:{
    section:{
      type:String,
      required:true
    }
  }
};
</script>
