<template>
  <teleport to="body"> 
    <div class="modal is-active">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <slot name="header">
            <p class="modal-card-title">
              {{ title }}
            </p>
            <button 
              class="delete" 
              aria-label="close"
            />
          </slot>
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
        <footer class="modal-card-foot">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </teleport>
</template>
