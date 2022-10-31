<template>
<section>
  <h1 class="text-2xl font-bold">Your Routines</h1>
  <div v-if="userPending">
    Loading...
  </div>
  <div v-else class="pt-3 pb-4">
    <RoutineCard v-for="routine in userRoutines" :routine="routine" />
  </div>
</section>
  <section>
    <h1 class="text-2xl font-bold">Public Routines</h1>
  </section>
</template>

<script setup lang="ts">
import RoutineCard from '@/components/app/RoutineCard.vue'
import {getAllRoutines, getUserRoutines} from "@/composables/useRoutine"
import {computed, ComputedRef, watch} from "vue"

const lazyFetchUserRoutineResponse = getUserRoutines()
const userRoutines = computed(() => lazyFetchUserRoutineResponse.routines.value)
const userPending = computed(() => lazyFetchUserRoutineResponse.pending.value)
</script>

<style scoped>

</style>
