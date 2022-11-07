<template>
<div class="flex flex-col">
  <div class="flex flex-row">
    <div>{{interval.exercise}}</div>
  </div>
</div>
</template>

<script setup lang="ts">
import { IInterval } from "@/interfaces/IInterval";

interface Props {
  interval : IInterval
}
const { interval } = defineProps<Props>()
</script>

<style scoped>

</style>
