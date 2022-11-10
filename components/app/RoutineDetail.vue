<template>
  <SideDrawer :active="routineDetailOpen" @click-back="handleClickBack" :color="routineDetailColor">
    <template #headerCenter>
      <span>{{ routineDetail?.title }}</span>
    </template>
    <template #headerRight>
      <Button v-if="isRoutineDetailPrivateView" iconName="mdi:trash-can-outline" iconSize="text-4xl" @click="handleDeleteRoutine"/>
      <Button v-else iconName="mdi:content-copy" iconSize="text-4xl" @click="handleCopyRoutine"/>
      <Button iconName="ic:outline-play-circle-filled" iconSize="text-4xl" class="ml-3" @click="handleStartRoutine"/>
    </template>
    <template #main>
      <div class="flex flex-col">
        <div v-for="interval in intervals" class="py-2">
          <IntervalCard :interval="interval" @copy="handleCopyInterval" @delete="handleDeleteInterval"/>
        </div>
        <ButtonAdd v-if="isRoutineDetailPrivateView" class="mt-2" @click="handleAddNewInterval" />
      </div>
    </template>
  </SideDrawer>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/drawer/SideDrawer.vue'
import Button from '@/components/button/Button.vue'
import ButtonAdd from '@/components/button/ButtonAdd.vue'
import IntervalCard from '@/components/app/IntervalCard.vue'
import {computed} from "vue";
import {useRoutineStore} from "@/stores/useRoutineStore";
import {RoutineDetailViewType} from "@/enums/RoutineDetailViewType";

const routineStore = useRoutineStore()
const routineDetail = computed(() => routineStore.routineDetail.routine)
const routineDetailOpen = computed(() => routineStore.routineDetail.open)
const routineDetailColor = computed(() => routineStore.routineDetail.color)
const isRoutineDetailPrivateView = computed(() => routineStore.routineDetail.type === RoutineDetailViewType.private)
const intervals = computed(() => routineDetail.value?.intervals || [])
const handleClickBack = () => routineStore.closeRoutineDetail()
const handleDeleteRoutine = () => {
  routineStore.deleteRoutine(routineDetail.value)
  routineStore.closeRoutineDetail()
}
const handleStartRoutine = () => {
}
const handleCopyRoutine = () => {
  const newCopiedRoutine = routineStore.copyRoutine(routineDetail.value)
  console.log(newCopiedRoutine)
  routineStore.openRoutineDetail(newCopiedRoutine, RoutineDetailViewType.private)
}
const handleCopyInterval = (interval) => routineStore.copyInterval(routineDetail.value, interval)
const handleDeleteInterval = (interval) => routineStore.deleteInterval(routineDetail.value, interval)
const handleAddNewInterval = () => routineStore.addInterval(routineDetail.value)
</script>

<style scoped>

</style>
