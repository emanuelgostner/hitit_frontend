<template>
<button ref="btn" @click="btnActive = true" class="drop-shadow-md hover:drop-shadow-none active:drop-shadow-none">
  <Icon name="ic:outline-play-circle-filled" class="text-5xl" :class="{'animate-jello-horizontal': btnActive}"/>
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
