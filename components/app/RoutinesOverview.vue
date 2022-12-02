<template>
<RoutineDetail />
<div class="p-3">
  <section class="pt-3 pb-2">
    <h1 class="text-2xl font-bold">Your Routines</h1>
    <div class="pb-2">
      <div v-for="routine in userRoutines" class="pt-3">
        <RoutineCard
            :routine="routine"
            @clickContent="handleRoutineClick(routine, RoutineDetailViewType.private, $event)"
            @clickStart="handleStartClick(routine)"/>
      </div>
      <div v-if="!userRoutines.length">
        <NoData />
      </div>
    </div>
    <ButtonAdd @click="handleAddRoutineClick"/>
  </section>
  <section>
    <h1 class="text-2xl font-bold">Public Routines</h1>
    <div class="pb-2">
      <div v-for="routine in publicRoutines" class="pt-3">
        <RoutineCard
            :routine="routine"
            @clickContent="handleRoutineClick(routine, RoutineDetailViewType.public, $event)"
            @clickStart="handleStartClick(routine)"/>
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
import RoutineCard from '@/components/app/RoutineCard.vue'
import RoutineDetail from '@/components/app/RoutineDetail.vue'
import ButtonAdd from "@/components/button/ButtonAdd.vue"
import NoData from "@/components/common/NoData.vue"
import {computed, onMounted} from "vue"
import { useRoutineStore } from "@/stores/useRoutineStore";
import { useUserStore } from "@/stores/useUserStore";
import { IRoutine } from "@/interfaces/IRoutine";
import { RoutineDetailViewType } from "@/enums/RoutineDetailViewType"
import {Repository} from "@/repositories/Repository";

const routineStore = useRoutineStore()
routineStore.loadPublicRoutines()
const userStore = useUserStore()
const loggedIn = computed(() => userStore.loggedIn)
watch(loggedIn, () => {
  console.log('load by user1')
  if (userStore.auth.accessToken) {
    console.log('load by user2')
    console.log('Repository.token',Repository.token)
    routineStore.loadRoutinesByUser(userStore.user)
  }
},  { immediate:true })
const publicRoutines = computed(() => routineStore.publicRoutines)
const userRoutines = computed(() => routineStore.userRoutines)
const handleRoutineClick = (routine : IRoutine, routineDetailViewType : RoutineDetailViewType, color : String) =>
    routineStore.openRoutineDetail(routine, routineDetailViewType, color)
const handleAddRoutineClick = () => {
  const newRoutine = routineStore.addRoutine()
  routineStore.openRoutineDetail(newRoutine, RoutineDetailViewType.private)
}
const handleStartClick = (routine : IRoutine) => {
  routineStore.startRoutine(routine)
}
</script>

<style scoped>

</style>
