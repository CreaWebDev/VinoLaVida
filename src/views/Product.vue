<template>
  <div class="product">
    <div class="product__nav">
      <router-link to="/">
        <i id="back" class="fas fa-long-arrow-alt-left"></i>
      </router-link>
      <top-bar/>
    </div>
    <product-info/>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "product",
  components: {
    ProductInfo,
    TopBar
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main";

.product {

  &__nav i {
    font-size: 20px;
    color: $active-color;
    position: absolute;
    top: 10px;
    left: 40px;
  }
}
</style>