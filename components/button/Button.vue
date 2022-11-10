<template>
  <button ref="btn" @click="handleClick" class="drop-shadow-md hover:drop-shadow-none active:drop-shadow-none">
    <div :class="[iconSize ? iconSize : 'text-3xl', {'animate-jello-horizontal': btnActive}]">
      <slot>
        <Icon :name="iconName" />
      </slot>
    </div>
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
const emit = defineEmits(['click'])
const handleClick = () => {
  btnActive.value = true
  emit('click')
}
const { iconName, iconSize } = defineProps<Props>()
</script>
