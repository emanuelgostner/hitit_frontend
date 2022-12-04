<template>
<div :class="`flex flex-row cursor-pointer items-center justify-between rounded-lg bg-${randomColor}-200`" @click="handleClick">
  <div class="p-3" >
   <p class="text-lg font-bold">
     {{ routine.title || 'No title yet ☹️' }}
   </p>
    <p v-if="routine.creator && !hideCreator" class="text-sm text-slate-500">
      <span class="ml-4">
        {{ `by ${routine.creator.firstName}` }}
      </span>
    </p>
  </div>
  <ButtonStart class="mr-3" @click.stop.prevent @click="handleStartClick" />
</div>
</template>

<script setup lang="ts">

import { defineProps } from "vue";
import { IRoutine } from "@/interfaces/IRoutine";
import ButtonStart from '@/components/button/ButtonStart.vue'
import { getRandomTailwindColor } from "@/composables/useColor"
interface Props {
  routine: {
    type: IRoutine
    required: true
  },
  hideCreator: {
    type: boolean
    required: false
    default: false
  }
}
const { routine, hideCreator } = defineProps<Props>()
const randomColor = computed(() => getRandomTailwindColor())
const emit = defineEmits(['click-content', 'click-start'])
const handleClick = () => {
  emit('click-content', randomColor.value)
}
const handleStartClick = () => {
  emit('click-start')
}
</script>
