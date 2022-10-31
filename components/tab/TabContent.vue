<template>
  <div v-show="activeTab">
    <slot/>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps} from "vue";
import { useTabStore } from "@/stores/useTabStore";

interface Props {
  context : String,
  tabIndex: number
}
const { context, tabIndex } = defineProps<Props>()
const tabStore = useTabStore()
const activeTab = computed(() => {
  return tabStore.getActiveTabForContext(context) === tabIndex
})
</script>
