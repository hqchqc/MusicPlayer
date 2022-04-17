<script setup lang="ts">
import "@/utils/iconfont.js";
import { computed } from "@vue/reactivity";
interface PropsType {
  iconClass: string;
}
const props = defineProps<PropsType>();

const iconName = computed(() => `#icon-${props.iconClass}`);
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: inline;
}
</style>
