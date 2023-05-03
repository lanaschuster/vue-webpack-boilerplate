<template>
  <section>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Título</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in controller.productPagination.items"
          :key="index"
        >
          <td>{{ product.id }}</td>
          <td>
            <img 
              :src="product.image"
              :alt="product.title" 
              class="image is-96x96"
            >
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>R$ {{ product.price }}</td>
          <td>
            -
          </td>
        </tr>
      </tbody>
    </table>
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
