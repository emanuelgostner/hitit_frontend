<template>
<div :class='attrs.class'>
  <div class="flex flex-row space-x-2 place-content-center pt-2 pb-7 text-base select-none">
    <button @click="tabStore.setActiveTabForContext(context, index)" v-for="(item, index) in items" :class="`
    ${activeTab === index ? 'active' : 'inactive'}
    basis-1/${items.length}
    px-5
    transition
    ease-in-out
    duration-300
    transform-gpu
    group
    `">
      <template v-if="item.text && item.icon">
        <div class="flex flex-col justify-center">
          <div><Icon :name="item.icon" class="text-red-400 group-focus:text-red-600 group-focus:scale-110"/></div>
          <div>{{item.text}}</div>
        </div>
      </template>
      <template v-if="item.text && item.img">
        <div class="flex flex-col">
          <img :src="item.img" alt="">
          {{item.text}}
        </div>
      </template>
      <template v-else-if="item.img">
        <img :src="item.img" alt="">
      </template>
      <template v-else-if="item.icon">

      </template>
    </button>
  </div>
</div>
</template>
<script setup lang="ts">
import { useTabStore } from '@/stores/useTabStore';
import { defineProps, useAttrs, computed } from 'vue'
import TabItem from 'interfaces/TabItem'
interface Props {
  context: String,
  items: Array<TabItem>
  defaultTab?: number
}
const { items, context, defaultTab } = defineProps<Props>()
const tabStore = useTabStore()
const activeTab = computed(() => {
  return tabStore.getActiveTabForContext(context)
})
tabStore.setActiveTabForContext(context, defaultTab)
const attrs = useAttrs()
</script>
<style scoped lang="less">

::v-deep(button){
  outline: none;
  background-color: transparent;
  text-decoration: none;
  svg {
    font-size: 2.2em;
    filter: drop-shadow(0.5px 0.5px 0.5px rgb(0 0 0 / 0.4));
  }
  &.active {
    transform: scale(1.1);
    svg {
      color: #dc2626;
    }
  }
}
</style>
