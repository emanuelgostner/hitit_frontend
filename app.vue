<template>
  <div class="h-full fixed bottom-0 top-0 left-0 right-0 -z-10 bg-white" />
  <Login />
  <div class="container h-full mx-auto select-none">
    <div class="flex flex-col h-full">
      <main class="grow text-slate-700 overflow-auto pb-28">
        <TabContent :context="mainMenuContext" :tabIndex="0">
         ❤
        </TabContent>
        <TabContent :context="mainMenuContext" :tabIndex="1">
          <RoutinesOverview />
        </TabContent>
        <TabContent :context="mainMenuContext" :tabIndex="2">
         😂
        </TabContent>
      </main>
      <nav class="fixed bottom-0 left-0 right-0 bg-white z-10 text-slate-600">
        <RoutineStart />
        <TabNavigation class="border-t border-slate-200" :context="mainMenuContext" :defaultTab="1" :items="items" />
      </nav>
    </div>
  </div>

</template>
<script setup lang="ts">
import RoutinesOverview from '@/components/app/RoutinesOverview.vue'
import RoutineStart from '@/components/app/RoutineStart.vue'
import TabNavigation from '@/components/tab/TabNavigation.vue'
import TabContent from '@/components/tab/TabContent.vue'
import TabItem from '@/interfaces/TabItem'
import Login from '@/components/app/Login.vue'
import {useRoutineStore} from "@/stores/useRoutineStore";

const mainMenuContext = 'mainMenu'
const items: Array<TabItem> = [
  {text: 'History', icon:'mdi:calendar-clock'},
  {text: 'Routines', icon: 'ion:fitness'},
  {text: 'Exercises', icon:'maki:fitness-centre-11'}
]
const routineStore = useRoutineStore()
const routineStarted = computed(() => !!routineStore.routineStarted.routine)
</script>
