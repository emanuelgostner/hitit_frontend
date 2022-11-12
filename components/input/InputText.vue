<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :placeholder="lbl"
      class="my-2 py-2 px-4 w-full text-lg border-2 border-white outline-none rounded-md focus:border-slate-500" />
</template>

<script setup lang="ts">
interface Props {
  lbl? : String,
  modelValue : String
}
const { lbl, modelValue } = defineProps<Props>()
</script>

<style scoped>

</style>
