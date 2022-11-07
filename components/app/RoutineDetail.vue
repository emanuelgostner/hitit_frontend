<template>
  <SideDrawer :active="routineDetailOpen" @click-back="handleClickBack()">
    <template #headerCenter>
      title
    </template>
    <template #headerRight>
      <Button iconName="mdi:trash-can-outline" iconSize="text-4xl" @click="handleDelete"/>
      <Button iconName="ic:outline-play-circle-filled" iconSize="text-4xl" class="ml-3" @click="handleStart"/>
    </template>
    <template #main>
      <div class="flex flex-col">
        <div v-for="interval in intervals" class="py-2">
          <IntervalCard :interval="interval"/>
        </div>
      </div>
    </template>
  </SideDrawer>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/drawer/SideDrawer.vue'
import Button from '@/components/button/Button.vue'
import IntervalCard from '@/components/app/IntervalCard.vue'
import { computed } from "vue";
import { useRoutineStore } from "@/stores/useRoutineStore";
const routineStore = useRoutineStore()
const routineDetail = computed(() => routineStore.routineDetail.routine)
const routineDetailOpen = computed(() => routineStore.routineDetail.open)
const intervals = computed(() => routineDetail.value?.intervals || [])
const handleClickBack = () => routineStore.closeRoutineDetail()
const emit = defineEmits(['click-start', 'click-delete'])
const handleDelete = () => {
  emit('click-delete')
}
const handleStart = () => {
  emit('click-start')
}
</script>

<style scoped>

</style>
