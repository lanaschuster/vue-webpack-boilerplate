<template>
  <button 
    class="button"
    :class="{
      'is-loading': loading
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
});
</script>
