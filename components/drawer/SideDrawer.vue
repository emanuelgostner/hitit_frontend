<template>
<div class="flex flex-col fixed top-0 left-0 right-0 bottom-0 bg-white z-10">
  <div class="flex flex-row items-center px-4 py-2 border-b border-slate-200">
    <Button iconName="material-symbols:arrow-back-ios-rounded" />
    <div class="text-xl ml-2">
      <slot name="headerCenter" />
    </div>
    <div class="ml-auto">
      <slot name="headerRight" />
    </div>
  </div>
  <div>
    <slot name="main" />
  </div>
</div>
</template>
<script setup lang="ts">
import Button from '@/components/button/Button.vue'
</script>

<style scoped>

</style>
