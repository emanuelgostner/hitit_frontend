<template>
<div class="flex flex-col fixed h-full bg-white z-10 right-0 left-0 translate-x-full transition-all" :class="{'translate-x-0': active}">
  <div class="flex flex-row items-center px-4 py-2 border-b border-slate-200">
    <Button iconName="material-symbols:arrow-back-ios-rounded" @click="$emit('click-back')"/>
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
interface Props {
  active : boolean
}
const { active } = defineProps<Props>()
</script>
