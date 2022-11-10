<template>
<div class="flex flex-col shadow py-2 px-3 rounded bg-white">
  <div class="flex flex-row justify-between">
    <div><p class="font-medium text-teal-400">{{interval.exercise}}</p></div>
    <div v-if="isRoutineDetailPrivateView">
      <Button icon-name="mdi:content-copy" icon-size="text-2xl" @click="emit('copy', interval)"/>
      <Button icon-name="mdi:trash-can-outline"  icon-size="text-2xl" class="ml-2" @click="emit('delete', interval)"/>
    </div>
  </div>
  <div class="flex flex-row justify-around mt-2 mb-1">
    <p><i>Duration</i> <span class="font-medium">{{ interval.duration }}</span></p>
    <p><i>Rest</i> {{ interval.rest }}</p>
    <p><i>Repetitions</i> {{ interval.repetitions }}</p>
  </div>
</div>
</template>

<script setup lang="ts">
import { IInterval } from "@/interfaces/IInterval";
import Button from "@/components/button/Button.vue"
import { useRoutineStore } from "@/stores/useRoutineStore";
import {computed} from "vue";
import {RoutineDetailViewType} from "@/enums/RoutineDetailViewType";
const emit = defineEmits(['copy', 'delete'])
const routineStore = useRoutineStore()
const isRoutineDetailPrivateView = computed(() => routineStore.routineDetail.type === RoutineDetailViewType.private)
interface Props {
  interval : IInterval
}

const { interval } = defineProps<Props>()
</script>

<style scoped>

</style>
