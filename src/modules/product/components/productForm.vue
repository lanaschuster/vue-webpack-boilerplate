<template>
  <AppModal>
    <template #header>
      Cadastrar produto
    </template>
    <template #default>
      <div class="form-container">
        <FormKit 
          ref="productForm"
          type="form"
          :actions="false" 
          @submit="$emit('save', true)"
        >
          <AppInput
            v-model="model.title"
            :validation="[['required']]"
            type="text"
            label="Título"
            placeholder="Ex: Livro Arquitetura Limpa de Uncle Bob"
          />
          <AppInput
            v-model="model.price"
            :validation="[['required']]"
            type="number"
            label="Preço"
            value="0"
            step="0.01"
          />
          <AppInput
            v-model="model.image"
            type="text"
            label="URL da imagem"
          />
          <AppInput 
            v-model="model.category" 
            type="text" 
            label="Categoria" 
          />
          <AppInput 
            v-model="model.description" 
            type="text" 
            label="Descrição" 
          />
        </FormKit>
      </div>
    </template>
    <template #footer>
      <div>
        <AppButton @click="onClose">
          Cancelar
        </AppButton>
        <AppButton
          class="is-primary"
          :loading="loading"
          @click="onFormSubmit"
        >
          Salvar
        </AppButton>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppModal from '@/components/appModal.vue';
import AppButton from '@/components/appButton.vue';
import AppInput from '@/components/appInput.vue';

const productForm = ref();

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'update:modelValue', 'save']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function onClose() {
  emit('close', true);
}

function onFormSubmit() {
  productForm.value.node.submit();
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
