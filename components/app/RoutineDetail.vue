<template>
  <SideDrawer :active="routineDetailOpen" @click-back="handleClickBack" :color="routineDetailColor" data-testid="routineDetail">
    <template #headerCenter>
      <InputText v-if="isRoutineDetailPrivateView" :dense="true" lbl="No title yet" v-model="routineDetail.title" data-testid="routineTitleInput"/>
      <span v-else>{{ routineDetail?.title }}</span>
    </template>
    <template #headerRight>
      <Button v-if="isRoutineDetailPrivateView" icon-name="mdi:trash-can-outline" iconSize="text-4xl" @click="handleDeleteRoutine" data-testid="deleteRoutine"/>
      <Button v-else icon-name="mdi:content-copy" iconSize="text-4xl" @click="handleCopyRoutine"/>
      <Button icon-name="ic:outline-play-circle-filled" iconSize="text-4xl" class="ml-3" @click="handleStartRoutine(routineDetail)" data-testid="startRoutine"/>
    </template>
    <template #main>
      <div class="flex flex-col" data-testid="intervalContainer">
        <div v-for="(interval, index) in intervals" class="py-2">
          <IntervalCard
              :interval="interval"
              :data-testid='"intervalItem-"+(index+1)'
              @copy="isRoutineDetailPrivateView && handleCopyInterval(interval)"
              @delete="isRoutineDetailPrivateView && handleDeleteInterval(interval)"
              @click="isRoutineDetailPrivateView && handleEditInterval(interval)"
          />
        </div>
        <ButtonAdd v-if="isRoutineDetailPrivateView" class="mt-2" @click="handleAddNewInterval" data-testid="newInterval" />
      </div>
    </template>
  </SideDrawer>
  <BottomDrawer :active="editDetailsOpen" @close="editDetailsOpen=false">
    <template #headerCenter><p class="text-2xl font-medium">Interval</p></template>
    <template #main>
      <div class="flex flex-col justify-center" >
        <InputText data-testid="intervalTitle" lbl="Interval name" v-model="editDetailsIntervalNewValue.exercise" tabindex="1" class="text-teal-500 font-medium" @keyup.enter="inputDuration.getRoot().value.focus()"/>
        <div class="flex flex-row items-center">
          <InputTimepicker data-testid="intervalDuration" ref="inputDuration" v-model="editDetailsIntervalNewValue.duration" tabindex="2" lbl="Duration" class="font-medium w-1/2" />
          <div class="font-medium px-3">second/s duration</div>
        </div>
        <div class="flex items-center">
          <InputTimepicker data-testid="intervalRest" v-model="editDetailsIntervalNewValue.rest" tabindex="3" lbl="Rest" class="font-medium w-1/2" />
          <span class="font-medium px-3">second/s rest</span>
        </div>
        <div class="flex items-center">
          <InputTimepicker data-testid="intervalRepetitions" v-model="editDetailsIntervalNewValue.repetitions" tabindex="4" lbl="Repetitions" class="font-medium w-1/2" />
          <span class="font-medium px-3">repetition/s</span>
        </div>
        <Button
            data-testid="intervalSave"
            @click="handleSaveInterval"
            tabindex="5"
            icon-name="material-symbols:save-outline"
            icon-size="text-4xl"
            class="bg-green-300 p-1 mt-2 rounded-full" />
      </div>
    </template>
  </BottomDrawer>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/drawer/SideDrawer.vue'
import Button from '@/components/button/Button.vue'
import ButtonAdd from '@/components/button/ButtonAdd.vue'
import IntervalCard from '@/components/app/IntervalCard.vue'
import InputText from '@/components/input/InputText.vue'
import InputTimepicker from '@/components/input/InputTimepicker.vue'
import { computed, ref } from "vue";
import { useRoutineStore } from "@/stores/useRoutineStore";
import { RoutineDetailViewType } from "@/enums/RoutineDetailViewType";
import BottomDrawer from "@/components/drawer/BottomDrawer.vue";
import { IInterval } from "@/interfaces/IInterval";
import { IRoutine } from '@/interfaces/IRoutine'
import { Interval } from "@/models/Interval";

const inputDuration = ref(null)
const routineStore = useRoutineStore()
const routineDetail = computed(() => routineStore.routineDetail.routine)
const routineDetailOpen = computed(() => routineStore.routineDetail.open)
const routineDetailColor = computed(() => routineStore.routineDetail.color)
const isRoutineDetailPrivateView = computed(() => routineStore.routineDetail.type === RoutineDetailViewType.private)
const intervals = computed(() => routineDetail.value?.intervals || [])
const editDetailsOpen = ref(false)
const editDetailsInterval = ref(new Interval())
const editDetailsIntervalNewValue = ref(new Interval())

watch(routineDetailOpen, () => editDetailsOpen.value = false)
const handleClickBack = () => routineStore.closeRoutineDetail(true)
const handleDeleteRoutine = () => {
  routineStore.deleteRoutine(routineDetail.value)
  routineStore.closeRoutineDetail()
}
const handleStartRoutine = (routine :IRoutine) => {
  routineStore.startRoutine(routine)
}
const handleCopyRoutine = () => {
  const newCopiedRoutine = routineStore.copyRoutine(routineDetail.value)
  routineStore.openRoutineDetail(newCopiedRoutine, RoutineDetailViewType.private)
}
const handleCopyInterval = (interval : IInterval) => routineStore.copyInterval(routineDetail.value, interval)
const handleDeleteInterval = (interval : IInterval) => routineStore.deleteInterval(routineDetail.value, interval)
const handleAddNewInterval = () => {
  const newInterval = routineStore.addInterval(routineDetail.value)
  handleEditInterval(newInterval)
}
const handleEditInterval = (interval : IInterval) => {
  editDetailsInterval.value = interval
  editDetailsIntervalNewValue.value = Interval.copy(interval)
  editDetailsOpen.value = true
}
const handleSaveInterval = () => {
  routineStore.updateInterval(editDetailsIntervalNewValue.value, editDetailsInterval.value)
  editDetailsOpen.value = false
}
</script>

<style scoped>

</style>
