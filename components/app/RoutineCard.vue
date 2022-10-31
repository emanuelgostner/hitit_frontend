<template>
<div :class="`flex flex-row items-center justify-between p-3 drop-shadow-md rounded-lg bg-${randomColor}-200`">
  <div>
   <p class="text-lg font-bold">
     {{ routine.title }}
   </p>
    <p class="text-sm text-slate-500">
      <span class="ml-4">
        {{ `by ${routine.creator}` }}
      </span>
    </p>
  </div>
  <button ref="btn" @click="btnActive = true" :class="{ active : btnActive }">
    <Icon name="ic:outline-play-circle-filled" class="text-5xl"/>
  </button>

</div>
</template>

<script setup lang="ts">

import { defineProps, ref } from "vue";
import { IRoutine } from "@/interfaces/IRoutine";
import { getRandomTailwindColor } from "@/composables/useColor"
interface Props {
  routine : IRoutine
}
const { routine } = defineProps<Props>()
const btn = ref(null)
const btnActive = ref(false)
onMounted(() => {
  btn.value.onanimationend = () => {
    btnActive.value = false
  }
})
const randomColor = computed(() => getRandomTailwindColor())
</script>

<style lang="less">
button {
  transform: scale(1);
  transition: all ease-in-out;
  &.active {
    animation: bounce .3s ease-out;
   }
}
@keyframes bounce {
  0% { transform: scale(1) }
  50% { transform: scale(1.2)}
  100% { transform: scale(1) }
}
</style>
