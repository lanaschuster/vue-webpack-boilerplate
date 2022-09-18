<template>
  <h1 class="title">
    Alo mundo!
  </h1>
  <h2>{{ title }}</h2>
</template>

<script>
import { computed } from 'vue';
export default {
  setup() {
    const title = computed(() => 'Primeira aplicação com Vue 3 + webpack');

    return {
      title
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Rubik', Geneva, Verdana, sans-serif;
  font-weight: 400;
}
.title {
  color: blue;
}
</style>
