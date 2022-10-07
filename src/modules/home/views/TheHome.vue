<template>
  <section>
    <h1 class="title">
      Vue 3 + Webpack 5 Boilerplate
    </h1>
    <h2>{{ title }}</h2>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  setup() {
    const title = computed(() => 'Uma aplicação base para você começar o seu projeto mais rápido!');

    return {
      title
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: blue;
}
</style>
