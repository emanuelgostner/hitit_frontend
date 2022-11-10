<template>
<div class="flex flex-col fixed h-full z-10 right-0 left-0 transition-all" :class="[active ? 'translate-x-0' : 'translate-x-full', color ? `bg-${color}-200` : '']">
  <div class="flex flex-row items-center px-4 py-2 border-b border-slate-200 bg-white header">
    <Button iconName="material-symbols:arrow-back-ios-rounded" @click="$emit('click-back')"/>
    <div class="text-xl ml-2">
      <slot name="headerCenter" />
    </div>
    <div class="ml-auto">
      <slot name="headerRight" />
    </div>
  </div>
  <div class="main pb-10 overflow-auto px-2">
    <slot name="main" />
  </div>
</div>
</template>
<script setup lang="ts">
import Button from '@/components/button/Button.vue'
interface Props {
  active : boolean,
  color? : String
}
const { active, color } = defineProps<Props>()
</script>
<style scoped lang="less">
::v-deep(.main) {
  height: 85vh
}
::v-deep(.header) {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
</style>
