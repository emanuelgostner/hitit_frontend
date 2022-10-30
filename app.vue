<template>
  <div class="container h-full mx-auto">
    <div class="flex flex-col h-full">
      <main class="bg-emerald-400 grow">

      </main>
      <nav>
        <TabNavigation context="mainMenu" :items="items" />
      </nav>
    </div>
  </div>
  
</template>
<script setup lang="ts">
import TabNavigation from './components/tab/TabNavigation.vue'
import TabItem from './interfaces/TabItem'
const items: Array<TabItem> = [
  {text: 'Home'},
  {text: 'History'},
  {text: 'Exercises'}
]
</script>