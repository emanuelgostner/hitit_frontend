<template>
<div :class="`flex flex-row cursor-pointer items-center justify-between p-3 rounded-lg bg-${randomColor}-200`">
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
  <ButtonStart />
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
</script>
