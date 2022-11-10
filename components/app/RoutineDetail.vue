<template>
  <SideDrawer :active="routineDetailOpen" @click-back="handleClickBack" :color="routineDetailColor">
    <template #headerCenter>
      <span>{{ routineDetail?.title }}</span>
    </template>
    <template #headerRight>
      <Button v-if="isRoutineDetailPrivateView" icon-name="mdi:trash-can-outline" iconSize="text-4xl" @click="handleDeleteRoutine"/>
      <Button v-else icon-name="mdi:content-copy" iconSize="text-4xl" @click="handleCopyRoutine"/>
      <Button icon-name="ic:outline-play-circle-filled" iconSize="text-4xl" class="ml-3" @click="handleStartRoutine"/>
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
  <BottomDrawer :active="editDetailsOpen" @close="editDetailsOpen=false">
    <template #headerCenter><p class="text-2xl font-medium">Interval</p></template>
    <template #main>
      <div class="flex justify-center">
        <Button icon-name="material-symbols:save-outline" icon-size="text-4xl" />
      </div>
    </template>
  </BottomDrawer>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/drawer/SideDrawer.vue'
import Button from '@/components/button/Button.vue'
import ButtonAdd from '@/components/button/ButtonAdd.vue'
import IntervalCard from '@/components/app/IntervalCard.vue'
import { computed, ref } from "vue";
import { useRoutineStore } from "@/stores/useRoutineStore";
import { RoutineDetailViewType } from "@/enums/RoutineDetailViewType";
import BottomDrawer from "@/components/drawer/BottomDrawer.vue";

const routineStore = useRoutineStore()
const routineDetail = computed(() => routineStore.routineDetail.routine)
const routineDetailOpen = computed(() => routineStore.routineDetail.open)
const routineDetailColor = computed(() => routineStore.routineDetail.color)
const isRoutineDetailPrivateView = computed(() => routineStore.routineDetail.type === RoutineDetailViewType.private)
const intervals = computed(() => routineDetail.value?.intervals || [])
const editDetailsOpen = ref(true)
const editDetailsInterval = ref(null)

const handleClickBack = () => routineStore.closeRoutineDetail()
const handleDeleteRoutine = () => {
  routineStore.deleteRoutine(routineDetail.value)
  routineStore.closeRoutineDetail()
}
const handleStartRoutine = () => {
}
const handleCopyRoutine = () => {
  const newCopiedRoutine = routineStore.copyRoutine(routineDetail.value)
  routineStore.openRoutineDetail(newCopiedRoutine, RoutineDetailViewType.private)
}
const handleCopyInterval = (interval) => routineStore.copyInterval(routineDetail.value, interval)
const handleDeleteInterval = (interval) => routineStore.deleteInterval(routineDetail.value, interval)
const handleAddNewInterval = () => routineStore.addInterval(routineDetail.value)
</script>

<style scoped>

</style>
