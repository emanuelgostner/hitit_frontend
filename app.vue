<template>
  <div class="h-full fixed bottom-0 top-0 left-0 right-0 -z-10 bg-white" />
  <div class="container h-full mx-auto select-none">
    <div class="flex flex-col h-full">
      <main class="grow text-slate-700">
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
        <TabNavigation class="border-t border-slate-200" :context="mainMenuContext" :defaultTab="1" :items="items" />
      </nav>
    </div>
  </div>

</template>
<script setup lang="ts">
import RoutinesOverview from '@/components/app/RoutinesOverview.vue'
import TabNavigation from '@/components/tab/TabNavigation.vue'
import TabContent from '@/components/tab/TabContent.vue'
import TabItem from '@/interfaces/TabItem'
const mainMenuContext = 'mainMenu'
const items: Array<TabItem> = [
  {text: 'History', icon:'mdi:calendar-clock'},
  {text: 'Routines', icon: 'ion:fitness'},
  {text: 'Exercises', icon:'maki:fitness-centre-11'}
]
</script>
