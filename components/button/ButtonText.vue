<template>
  <button ref="btn" @click="handleClick" class="drop-shadow-md hover:drop-shadow-none active:drop-shadow-none bg-white rounded my-2 py-2 block w-full text-lg font-semibold">
    <span class="inline-block" :class="{'animate-jello-horizontal': btnActive}">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from "vue";
interface Props {
  iconName : string,
  iconSize? : string
}
const btn = ref(null)
const btnActive = ref(false)
onMounted(() => {
  btn.value.onanimationend = () => {
    btnActive.value = false
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  btnActive.value = true
  emit('click')
}
const { iconName, iconSize } = defineProps<Props>()
</script>
