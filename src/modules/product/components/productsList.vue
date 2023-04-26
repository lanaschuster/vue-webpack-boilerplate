<template>
  <section>
    <div
      v-for="(product, index) in controller.productPagination.items"
      :key="index"
      class="product-item"
    >
      <strong>{{ product.title }}</strong>
      <span>{{ product.description }}</span>
      <span>{{ product.price }}</span>
      <hr>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  controller: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  props.controller.getAll();
});
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
}
</style>
