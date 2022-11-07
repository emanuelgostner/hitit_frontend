<template>
<RoutineDetail />
<div class="p-3">
  <section class="pt-3 pb-2">
    <h1 class="text-2xl font-bold">Your Routines</h1>
    <div class="pb-2">
      <div v-for="routine in userRoutines" class="pt-3">
        <RoutineCard :routine="routine" @clickContent="handleRoutineClick(routine)"/>
      </div>
    </div>
    <ButtonAdd @click="handleAddRoutineClick"/>
  </section>
  <section>
    <h1 class="text-2xl font-bold">Public Routines</h1>
    {{ test }}
    <div class="pb-2">
      <div v-for="routine in publicRoutines" class="pt-3">
        <RoutineCard :routine="routine" @clickContent="handleRoutineClick(routine)" />
      </div>
    </div>
  </section>
  <button @click="fetchIT">fetch</button>
  <p>{{ exercisesC }}</p>
</div>
</template>

<script setup lang="ts">
import RoutineCard from '@/components/app/RoutineCard.vue'
import RoutineDetail from '@/components/app/RoutineDetail.vue'
import ButtonAdd from "@/components/button/ButtonAdd.vue"
import { computed } from "vue"
import { useRoutineStore } from "@/stores/useRoutineStore";
import { IRoutine } from "@/interfaces/IRoutine";
import { Routine } from "@/models/Routine";
import {useLazyFetch, useFetch, useLazyAsyncData} from "@/.nuxt/imports";
const routineStore = useRoutineStore()

const handleRoutineClick = (routine : IRoutine) => routineStore.openRoutineDetail(routine)
const handleAddRoutineClick = () => {
  const newRoutine = new Routine
  routineStore.addRoutine(newRoutine)
  routineStore.openRoutineDetail(newRoutine)
}

routineStore.loadPublicRoutines()
let publicRoutines = computed(() => routineStore.publicRoutines)
let userRoutines = computed(() => routineStore.userRoutines)
let test = computed(() => routineStore.test)
// const dataA = computed(() => data)
// const { data } = await useLazyFetch('http://localhost:8888/api/' + 'routines')
// routineStore.publicRoutines = data
let exercises = ref(null)
const exercisesC = computed(() => exercises.value)
const fetchIT = async () => {
  exercises.value = await useFetch('http://localhost:8888/api/' + 'exercises')
}
</script>

<style scoped>

</style>
