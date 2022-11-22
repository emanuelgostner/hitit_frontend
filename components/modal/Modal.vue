<template>
<div class="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 p-3">
  <div class="w-full h-full flex justify-center items-center">
    <div class="bg-white rounded-md p-3">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  small : boolean
}
const { small } = defineProps<Props>()
</script>

<style scoped>

</style>
