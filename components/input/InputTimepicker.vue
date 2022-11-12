<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="root"
      min="1"
      pattern="[0-9]*"
      type="number"
      :placeholder="lbl"
      class="my-2 py-2 px-4 text-lg border-2 border-white outline-none rounded-md focus:border-slate-500">
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  lbl? : String,
  modelValue : String
}
const { lbl, modelValue } = defineProps<Props>()
const root = ref(null)
const getRoot = () => {
  return root
}
defineExpose({ getRoot })
</script>
