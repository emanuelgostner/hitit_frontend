<template>
<button ref="btn" @click="btnActive = true" class="p-2 w-full cursor-pointer rounded-full text-center shadow-md bg-slate-50 hover:shadow-none active:shadow-inner">
  <Icon name="mdi:shape-square-rounded-plus" class="text-3xl" :class="{'animate-jello-horizontal': btnActive}" />
</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const btn = ref(null)
const btnActive = ref(false)
onMounted(() => {
  btn.value.onanimationend = () => {
    btnActive.value = false
  }
})
</script>
