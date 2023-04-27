import { createRouter, createWebHistory } from 'vue-router';

import ProductsPage from '@/modules/product/view/productsPage.vue';

const routes = [
  { 
    path: '/', 
    component: ProductsPage
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
