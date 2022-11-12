<template>
<div :class="`flex flex-row cursor-pointer items-center justify-between rounded-lg bg-${randomColor}-200`" @click="handleClick">
  <div class="p-3" >
   <p class="text-lg font-bold">
     {{ routine.title || 'No title yet ☹️' }}
   </p>
    <p v-if="routine.creator" class="text-sm text-slate-500">
      <span class="ml-4">
        {{ `by ${routine.creator.name}` }}
      </span>
    </p>
  </div>
  <ButtonStart class="mr-3" @click.stop.prevent />
</div>
</template>

<script setup lang="ts">

import { defineProps } from "vue";
import { IRoutine } from "@/interfaces/IRoutine";
import ButtonStart from '@/components/button/ButtonStart.vue'
import { getRandomTailwindColor } from "@/composables/useColor"
interface Props {
  routine : IRoutine
}
const { routine } = defineProps<Props>()
const randomColor = computed(() => getRandomTailwindColor())
const emit = defineEmits(['click-content'])
const handleClick = () => {
  emit('click-content', randomColor.value)
}
</script>
