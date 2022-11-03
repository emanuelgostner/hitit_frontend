<template>
  <SideDrawer>
    <template #headerCenter>
      title
    </template>
    <template #headerRight>
      <Button iconName="mdi:trash-can-outline" iconSize="text-4xl" />
      <Button iconName="ic:outline-play-circle-filled" iconSize="text-4xl" class="ml-3" />
    </template>
    <template #main>
      <div class="flex flex-col">
        <div v-for="interval in intervals" class="py-2">
          {{interval.exercise}}
        </div>
      </div>

    </template>
  </SideDrawer>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/drawer/SideDrawer.vue'
import Button from '@/components/button/Button.vue'
import {IRoutine} from "@/interfaces/IRoutine";
import { computed } from "vue";
import { useRoutineStore } from "@/stores/useRoutineStore";
interface Props {
  routine : IRoutine
}
const routineStore = useRoutineStore()
const routineDetail = computed(() => routineStore.routineDetail.routine)
const routineDetailOpen = computed(() => routineStore.routineDetail.open)
const intervals = computed(() => routineDetail.value?.intervals || [])
</script>

<style scoped>

</style>
