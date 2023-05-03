<template>
  <div class="columns bg">
    <div class="column is-full products-column">
      <div class="is-flex-direction-column">
        <div class="mb-2">
          <slot name="top" />
        </div>
        <div class="box">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-column {
  display: flex;
  justify-content: center;
  padding: 64px 0;
  height: max-content;
}
.bg {
  background-color: #cdb4db;
}
</style>
