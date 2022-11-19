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
    <div v-if="routineStarted" v-show="showFullRoutine" class="main">
      <RoutineTimer :routine="routine" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoutineStore } from "@/stores/useRoutineStore"
import Button from "@/components/button/Button.vue"
import RoutineTimer from '@/components/app/RoutineTimer.vue'

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
</script>
