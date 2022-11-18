<template>
  <div
      @click="expandStartedRoutine"
      class="header flex flex-col fixed border-slate-100 translate-y-full rounded-2xl fixed bg-slate-100 w-full z-30 right-0 left-0 bottom-0 duration-300 ease-in-out transition-all"
      :class="[
        showFullRoutine ? 'translate-y-0 top-0 bottom-0' : '',
        showMinifiedRoutine ? '-translate-y-full top-auto bottom-auto' : ''
        ]">
    <div class="flex flex-row justify-between px-4 py-2">
      <div />
      <div class="text-xl">
        <Button v-if="showFullRoutine" class="rotate-90" iconName="material-symbols:double-arrow-rounded" @click="minifyStartedRoutine"/>
        <template v-if="showMinifiedRoutine">{{ routineTitle }}</template>
      </div>
      <Button icon-name="radix-icons:cross-2" @click="closeStartedRoutine"/>
    </div>
    <div v-show="showFullRoutine" class="main">
      <div class="flex flex-col justify-center text-center">
        <h1 class="text-3xl font-bold mt-5">{{ currentInterval.exercise }}</h1>
        <div class="time font-extrabold my-7">{{ secondsToString(currentDuration) }}</div>
        <div class="flex flex-row justify-around">
          <div>
            <div class="text-2xl font-semibold"><span class="font-bold">{{ currentLeftReps }}</span>/{{ currentInterval.repetitions }}</div>
            <div class="text-xl">Reps</div>
          </div>
          <div>
            <div class="text-2xl font-bold">{{ secondsToString(totalIntervalTime) }}</div>
            <div class="text-xl">Total</div>
          </div>
          <div>
            <div class="text-2xl font-semibold"><span class="font-bold">{{ intervalIndex + 1 }}</span>/{{ intervals.length - 1 }}</div>
            <div class="text-xl">Intervals</div>
          </div>
        </div>
        <div class="flex flex-row justify-around mt-3">
          <Button iconSize="text-7xl" iconName="ic:round-keyboard-double-arrow-left"/>
          <Button @click="pause = !pause" class="w-1/4" :iconSize="!pause ? 'text-7xl' : 'text-5xl'" :iconName="!pause ? 'material-symbols:play-arrow-rounded' : 'ph:pause-fill'"/>
          <Button iconSize="text-7xl" iconName="ic:round-keyboard-double-arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, Ref, watch, ref } from "vue"
import { useRoutineStore } from "@/stores/useRoutineStore"
import Button from "@/components/button/Button.vue"
import { IInterval } from "@/interfaces/IInterval";
import { secondsToString } from "@/composables/useTimer";

const routineStore = useRoutineStore()
const routine = computed(() => routineStore.routineStarted.routine)
const routineTitle = computed(() => routine.value.title)
const routineStarted = computed(() => !!routine.value)
const routineOpen = computed(() => routineStore.routineStarted.open)
const showFullRoutine = computed(() => !!(routineStarted.value && routineOpen.value))
const showMinifiedRoutine = computed(() => !!(routineStarted.value && !routineOpen.value))
const closeStartedRoutine = routineStore.cancelStartedRoutine
const minifyStartedRoutine = routineStore.minifyStartedRoutine
const expandStartedRoutine = routineStore.expandStartedRoutine

const intervals : ComputedRef<Array<IInterval>> = computed(() => routine?.value?.intervals)
const totalIntervalTime : ComputedRef<number> = computed(() => intervals.value.reduce((sum, interval) => sum + interval.duration, 0))
const currentInterval : Ref<IInterval | null> = ref(null)
const currentDuration : Ref<number> = ref(0)
const currentLeftReps : Ref<number> = ref(0)
const currentRest : Ref<number> = ref(0)
const intervalIndex : Ref<number> = ref(0)
const pause : Ref<boolean> = ref(false)
let intervalTimer = null
const updateCurrentState = () => {
  if (currentDuration.value === 0) {
    currentLeftReps.value--
    if (currentLeftReps.value === 0) {
      clearInterval(intervalTimer)
      intervalTimer = null
      init()
      return
    }
    currentDuration.value = currentInterval.value.duration
    return
  }
  currentDuration.value--
}
const init = () => {
  const currInterval = intervals.value[intervalIndex.value]
  if (currInterval) {
    intervalIndex.value++
    mapIntervalToState(currInterval, currentInterval, currentDuration, currentLeftReps, currentRest)
    startIntervalTimer()
  }
}
const startIntervalTimer = () => {
  intervalTimer = setInterval(updateCurrentState, 1000);
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
