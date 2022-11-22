<template>
  <div
      @click="$emit('close')"
      class="fixed left-0 right-0 w-full h-full backdrop-blur-md bg-white/30 z-20" :class="active ? '' : 'invisible'"
  />
  <div
      class="header flex flex-col border-slate-100 rounded-2xl bg-slate-100 fixed w-full z-30 right-0 left-0 bottom-0 top-0 transition-all"
      :style="{ transform: active ? `translateY(${translateY || '18rem'})` : 'translateY(100%)'}">
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
  color? : String,
  translateY? : String
}
const { active, color = null, translateY } = defineProps<Props>()
</script>
<style scoped lang="less">
::v-deep(&.header) {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}
</style>
