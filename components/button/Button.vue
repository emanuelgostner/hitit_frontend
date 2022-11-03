<template>
  <button ref="btn" @click="btnActive = true" class="drop-shadow-md hover:drop-shadow-none active:drop-shadow-none">
    <Icon :name="iconName" :class="[iconSize ? iconSize : 'text-3xl', {'animate-jello-horizontal': btnActive}]" />
  </button>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
interface Props {
  iconName : string,
  iconSize? : string
}
const btn = ref(null)
const btnActive = ref(false)
onMounted(() => {
  btn.value.onanimationend = () => {
    btnActive.value = false
  }
})

const { iconName, iconSize } = defineProps<Props>()
</script>
