<template>
  <div
      @click="expandStartedRoutine"
      class="header flex flex-col fixed border-slate-100 translate-y-full rounded-2xl fixed bg-slate-100 w-full z-30 right-0 left-0 transition-all"
      :class="[
        showFullRoutine ? 'translate-y-0 top-0 bottom-0' : '',
        showMinifiedRoutine ? '-translate-y-full top-auto bottom-auto' : ''
        ]">
    <div class="flex flex-row justify-between px-4 py-2">
      <div>
        <Button iconName="material-symbols:double-arrow-rounded" @click="minifyStartedRoutine"/>
      </div>
      <div class="text-xl">

      </div>
      <Button icon-name="radix-icons:cross-2" @click="closeStartedRoutine"/>
    </div>
    <div class="main pb-10 overflow-auto px-2">
      <slot name="main" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoutineStore } from "@/stores/useRoutineStore"
import Button from "@/components/button/Button.vue"

const routineStore = useRoutineStore()
const showFullRoutine = computed(() => !!(routineStore.routineStarted.routine && routineStore.routineStarted.open))
const showMinifiedRoutine = computed(() => !!(routineStore.routineStarted.routine && !routineStore.routineStarted.open))
const closeStartedRoutine = routineStore.cancelStartedRoutine
const minifyStartedRoutine = routineStore.minifyStartedRoutine
const expandStartedRoutine = routineStore.expandStartedRoutine
</script>
