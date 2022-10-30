<template>
  <div class="h-full fixed bottom-0 top-0 left-0 right-0 z-0 bg-white" />
  <div class="container h-full mx-auto">
    <div class="flex flex-col h-full">
      <main class="grow">
        <IntervalTrainings />
      </main>
      <nav class="fixed bottom-0 left-0 right-0 bg-white z-10 text-slate-700">
        <TabNavigation class="border-t border-slate-200" :context="mainMenuContext" :defaultTab="1" :items="items" />
      </nav>
    </div>
  </div>

</template>
<script setup lang="ts">
import IntervalTrainings from './components/app/IntervalTrainings.vue'
import TabNavigation from './components/tab/TabNavigation.vue'
import TabItem from './interfaces/TabItem'
const mainMenuContext = 'mainMenu'
const items: Array<TabItem> = [
  {text: 'History', icon:'mdi:calendar-clock'},
  {text: 'Train', icon: 'ion:fitness'},
  {text: 'Exercises', icon:'maki:fitness-centre-11'}
]
</script>
