<script setup lang="ts">
const { index } = defineModel<{
  index: number
}>()
</script>

<template>
  <div class="flex justify-around items-center">
    <span class="w-6">{{ index.toString().padStart(2, '0') }}</span>
    <div class="i-carbon-favorite" />
    <div class="i-carbon-download" />
  </div>
</template>
