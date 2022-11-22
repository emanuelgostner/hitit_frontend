<template>
  <div v-if="currentInterval" class="flex flex-col justify-center text-center">
    <h1 class="text-3xl font-bold mt-5">{{ currentInterval.exercise }}</h1>
    <div class="time font-extrabold my-7">{{ secondsToString(currentDuration) }}</div>
    <div class="flex flex-row justify-around">
      <div class="w-1/3">
        <div class="text-2xl font-semibold"><span class="font-bold">{{ currentInterval.repetitions - currentLeftReps }}</span>/{{ currentInterval.repetitions }}</div>
        <div class="text-xl">Reps</div>
      </div>
      <div class="w-1/3">
        <div class="text-2xl font-bold">{{ secondsToString(totalIntervalTimeLeft) }}</div>
        <div class="text-xl">Total</div>
      </div>
      <div class="w-1/3">
        <div class="text-2xl font-semibold"><span class="font-bold">{{ intervals.indexOf(currentInterval) + 1  }}</span>/{{ intervals.length }}</div>
        <div class="text-xl">Intervals</div>
      </div>
    </div>
    <div class="flex flex-row justify-around mt-3">
      <Button @click="handlePreviousInterval" iconSize="text-7xl" iconName="ic:round-keyboard-double-arrow-left"/>
      <Button @click="handleStopPauseClick" class="w-1/4" :iconSize="!!intervalTimer ? 'text-5xl' : 'text-7xl'" :iconName="!!intervalTimer ? 'ph:pause-fill' : 'material-symbols:play-arrow-rounded'"/>
      <Button @click="handleNextInterval" iconSize="text-7xl" iconName="ic:round-keyboard-double-arrow-right"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ComputedRef, Ref, ref, defineProps} from "vue"
import Button from "@/components/button/Button.vue"
import Modal from '@/components/modal/Modal.vue'
import { IInterval } from "@/interfaces/IInterval";
import { secondsToString } from "@/composables/useTimer";
import { IRoutine } from "@/interfaces/IRoutine";
interface Props {
  routine : IRoutine
}
const { routine } = defineProps<Props>()

const intervals : ComputedRef<Array<IInterval>> = computed(() => routine?.intervals)
const currentInterval : Ref<IInterval | null> = ref(null)
const currentDuration : Ref<number> = ref(0)
const currentLeftReps : Ref<number> = ref(0)
const currentRest : Ref<number> = ref(0)
const intervalIndex : Ref<number> = ref(0)
const intervalTimer = ref(null)
const totalIntervalTimeLeft : ComputedRef<number> = computed(() => {
  const totalTime = intervals.value.reduce((sum, interval) => sum + (interval.duration * interval.repetitions), 0)
  const doneIntervalTime = intervals.value.slice(0, intervalIndex.value).reduce((sum, interval) => sum + (interval.duration * interval.repetitions), 0)
  const doneCurrentIntervalTime = (currentInterval.value.repetitions - (currentLeftReps.value + 1)) * currentInterval.value.duration
  const doneCurrentDuration = currentInterval.value.duration - currentDuration.value
  const totalTimeLeft = totalTime - (doneIntervalTime + doneCurrentIntervalTime + doneCurrentDuration)
  return (totalTimeLeft <= 0 ? 0 : totalTimeLeft)
})

const updateCurrentState = () : void => {
  if (currentDuration.value === 1) {
    if (currentLeftReps.value <= 0) {
      handleNextInterval()
      return
    }
    currentLeftReps.value--
    currentDuration.value = currentInterval.value.duration
    return
  }
  currentDuration.value--
}
const init = () : void => {
  stopIntervalTimer()
  const currInterval = intervals.value[intervalIndex.value]
  if (currInterval) {
    mapIntervalToState(currInterval, currentInterval, currentDuration, currentLeftReps, currentRest)
    currentLeftReps.value--
    startIntervalTimer()
  }
}
const startIntervalTimer = () => {
  stopIntervalTimer()
  intervalTimer.value = setInterval(updateCurrentState, 1000);
}
const stopIntervalTimer = () => {
  clearInterval(intervalTimer.value)
  intervalTimer.value = null
}
const mapIntervalToState = (
    interval : IInterval,
    currInterval : Ref<IInterval>,
    currDur : Ref<number>,
    currLeftReps : Ref<number>,
    currRest : Ref<number>
) => {
  currInterval.value = interval
  currDur.value = interval.duration
  currLeftReps.value = interval.repetitions
  currRest.value = interval.rest
}
const handleNextInterval = () => {
  stopIntervalTimer()
  if (intervals.value.length - 1 > intervalIndex.value) {
    intervalIndex.value++
    init()
  } else {
    console.log('no more intervals, Routine completed')
  }
}
const handlePreviousInterval = () => {
  stopIntervalTimer()
  intervalIndex.value > 0 ? intervalIndex.value-- : intervalIndex.value = 0
  init()
}
const handleStopPauseClick = () => {
  !!intervalTimer.value ? stopIntervalTimer() : startIntervalTimer()
}
if(intervals?.value?.length) {
  intervalIndex.value = 0
  init()
}
</script>
<style scoped lang="less">
::v-deep(.time) {
  font-size: 7rem;
}
</style>

