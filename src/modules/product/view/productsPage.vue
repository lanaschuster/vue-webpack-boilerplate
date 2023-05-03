<template>
  <ProductsPageLayout>
    <template #top>
      <button class="button is-link">
        Adicionar
      </button>
    </template>
    <template #default>
      <ProductsList :controller="controller" />
    </template>
  </ProductsPageLayout>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import ProductsPageLayout from '../layouts/productsPageLayout.vue';
import ProductsList from '../components/productsList.vue';
import { productController } from '@/modules/di/di';

const controller = ref(productController(getCurrentInstance));
</script>
