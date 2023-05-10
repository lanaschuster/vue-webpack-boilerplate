<template>
  <div class="columns bg">
    <div class="column is-full products-column">
      <div class="mb-2">
        <slot name="top" />
      </div>
      <div class="box">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-column {
  display: flex;
  justify-content: center;
  padding: 64px 32px;
  height: max-content;
  box-sizing: border-box;
  flex-direction: column;
}
.bg {
  background-color: #cdb4db;
  height: 100%;
  min-height: 100vh;
}
</style>
