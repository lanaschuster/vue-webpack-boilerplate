<template>
  <section>
    <AppLoading v-if="loading" />
    <table 
      v-else 
      class="table"
    >
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
import { onMounted, ref } from 'vue';
import AppLoading from '@/components/appLoading.vue';

const props = defineProps({
  controller: {
    type: Object,
    required: true
  }
});

const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await props.controller.getAll();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
.product-item {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  table, thead, tbody, th, td, tr { 
		display: block; 
	}
  thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
  tbody tr {
    grid-template-columns: repeat(1, 1fr);
  }
  td { 
		border: none !important;
    border-bottom: 1px solid #eee !important; 
		position: relative;
		padding-left: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
  td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
}
tr {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 0.5fr;
}
td {
  display: flex;
  align-items: center;
}
</style>
