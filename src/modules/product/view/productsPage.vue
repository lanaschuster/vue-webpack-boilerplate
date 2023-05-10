<template>
  <ProductsPageLayout>
    <template #top>
      <button 
        class="button is-link" 
        @click="openProductForm = true"
      >
        Adicionar
      </button>
    </template>
    <template #default>
      <ProductsList :controller="controller" />
    </template>
  </ProductsPageLayout>
  <ProductForm 
    v-if="openProductForm"
    v-model="controller.product"
    :loading="controller.loading"
    @close="onProductFormClose"
    @save="onProductSave"
  />
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { productController } from '@/modules/di/di';
import { Product } from '@/modules/product/domain/model/product';

import ProductsPageLayout from '@/modules/product//layouts/productsPageLayout.vue';
import ProductsList from '@/modules/product/components/productsList.vue';
import ProductForm from '@/modules/product/components/productForm.vue';

const controller = ref(productController(getCurrentInstance));
const openProductForm = ref(false);

function onProductFormClose() {
  controller.value.product = new Product({});
  openProductForm.value = false;
}

async function onProductSave() {
  await controller.value.save();
  openProductForm.value = false;
}
</script>
