<template>
<RoutineDetail />
<div class="p-3">
  <section class="pt-3 pb-2">
    <h1 class="text-2xl font-bold">Your Routines</h1>
    <div class="pb-2">
      <div v-for="routine in userRoutines" class="pt-3">
        <RoutineCard :routine="routine" @clickContent="handleRoutineClick(routine, RoutineDetailViewType.private, $event)"/>
      </div>
    </div>
    <ButtonAdd @click="handleAddRoutineClick"/>
  </section>
  <section>
    <h1 class="text-2xl font-bold">Public Routines</h1>
    <div class="pb-2">
      <div v-for="routine in publicRoutines" class="pt-3">
        <RoutineCard :routine="routine" @clickContent="handleRoutineClick(routine, RoutineDetailViewType.public, $event)" />
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
import RoutineCard from '@/components/app/RoutineCard.vue'
import RoutineDetail from '@/components/app/RoutineDetail.vue'
import ButtonAdd from "@/components/button/ButtonAdd.vue"
import {computed} from "vue"
import {useRoutineStore} from "@/stores/useRoutineStore";
import {IRoutine} from "@/interfaces/IRoutine";
import {Routine} from "@/models/Routine";
import {RoutineDetailViewType} from "@/enums/RoutineDetailViewType"

const routineStore = useRoutineStore()
routineStore.loadPublicRoutines()
const publicRoutines = computed(() => routineStore.publicRoutines)
const userRoutines = computed(() => routineStore.userRoutines)
const handleRoutineClick = (routine : IRoutine, routineDetailViewType : RoutineDetailViewType, color : String) =>
    routineStore.openRoutineDetail(routine, routineDetailViewType, color)
const handleAddRoutineClick = () => {
  const newRoutine = new Routine
  routineStore.addRoutine(newRoutine)
  routineStore.openRoutineDetail(newRoutine, RoutineDetailViewType.private)
}
</script>

<style scoped>

</style>
