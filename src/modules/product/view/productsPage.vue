<template>
  <div>
    <ProductsList :controller="controller" />
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import ProductsList from '../components/productsList.vue';
import { productController } from '@/modules/di/di';

const controller = ref(productController(getCurrentInstance));
</script>
