<template>
  <div
      class="header flex flex-col bg-slate-100 fixed w-full z-20 right-0 left-0 bottom-0 top-0 transition-all"
      :class="active ? 'translate-y-96' : 'translate-y-full'">
    <div class="flex flex-row justify-between px-4 py-2">
      <div>
        <slot name="headerLeft" />
      </div>
      <div class="text-xl">
        <slot name="headerCenter" />
      </div>
      <Button icon-name="radix-icons:cross-2" @click="$emit('close')"/>
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
const { active, color = null } = defineProps<Props>()
</script>
<style scoped lang="less">
::v-deep(&.header) {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}
</style>
