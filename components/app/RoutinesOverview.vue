<template>
<section class="pt-3 pb-4">
  <h1 class="text-2xl font-bold">Your Routines</h1>
  <div v-if="userPending">
    Loading...
  </div>
  <div v-else class="py-4">
    <RoutineCard v-for="routine in userRoutines" :routine="routine" />
  </div>
  <ButtonAdd />
</section>
  <section>
    <h1 class="text-2xl font-bold">Public Routines</h1>
    <div v-if="publicPending">
      Loading...
    </div>
    <div v-else class="pt-3 pb-4">
      <RoutineCard v-for="routine in publicRoutines" :routine="routine" />
    </div>
  </section>
  <button @click="reload()">fetch2</button>
</template>

<script setup lang="ts">
import RoutineCard from '@/components/app/RoutineCard.vue'
import ButtonAdd from "@/components/button/ButtonAdd.vue"
import { getPublicRoutines, getUserRoutines } from "@/composables/useRoutine"
import { computed } from "vue"

let userRoutines = null
let userPending = null
let publicRoutines = null
let publicPending = null
let lazyFetchUserRoutineResponse = getUserRoutines()
userRoutines = computed(() => lazyFetchUserRoutineResponse.routines.value)
userPending = computed(() => lazyFetchUserRoutineResponse.pending.value)

let lazyFetchPublicRoutineResponse = getPublicRoutines()
publicRoutines = computed(() => lazyFetchPublicRoutineResponse.routines.value)
publicPending = computed(() => lazyFetchPublicRoutineResponse.pending.value)
const reload = () => {
  let lazyFetchUserRoutineResponse = getUserRoutines()
  userRoutines = computed(() => lazyFetchUserRoutineResponse.routines.value)
  userPending = computed(() => lazyFetchUserRoutineResponse.pending.value)

  let lazyFetchPublicRoutineResponse = getPublicRoutines()
  publicRoutines = computed(() => lazyFetchPublicRoutineResponse.routines.value)
  publicPending = computed(() => lazyFetchPublicRoutineResponse.pending.value)
}
</script>

<style scoped>

</style>
