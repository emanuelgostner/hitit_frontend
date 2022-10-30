<template>
<div class="flex flex-row space-x-2">
    <div v-for="item in items" :class="`basis-1/${items.length}`">
        {{item.text}}
    </div>
</div>
</template>
<script setup lang="ts">
import { useTabStore } from '@/stores/useTabStore';
import { defineProps } from 'vue'
import TabItem from 'interfaces/TabItem'

interface Props {
  context: String,
  items: Array<TabItem>
}
const { items } = defineProps<Props>()
const tabStore = useTabStore()
</script>