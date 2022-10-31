<template>
<section>
  <h1 class="text-2xl text-slate-700">Your Intervals</h1>
  <div v-if="!lazyRoutinesResponse.pending" v-for="item in lazyRoutinesResponse.routines">
    {{ item.title }}
  </div>
</section>
  <section>
    <h1 class="text-2xl text-slate-700">Public Intervals</h1>
  </section>
</template>

<script setup lang="ts">
import { getAllRoutines } from "@/composables/useRoutine"
import {ILazyFetchRoutineResponse} from "@/interfaces/ILazyFetchRoutineResponse";
import {computed, ComputedRef} from "vue"

const lazyRoutinesResponse = getAllRoutines()
console.log('lazyRoutinesResponse', lazyRoutinesResponse)
//const lazyRoutinesResponse : ILazyFetchRoutineResponse = () => getAllRoutines()
</script>

<style scoped>

</style>
