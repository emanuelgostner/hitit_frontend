<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :placeholder="lbl"
      class="w-full text-lg border-2 border-white outline-none rounded-md focus:border-slate-500"
      :class="{'my-2 py-2 px-4': !dense}"/>
</template>

<script setup lang="ts">
interface Props {
  lbl? : String,
  dense? : Boolean,
  modelValue : String,
  type : String
}
const { lbl, dense = false, modelValue, type = "text" } = defineProps<Props>()
</script>

<style scoped>

</style>
