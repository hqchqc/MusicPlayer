<script setup lang="ts">
import { usrNumberFormat } from '~/composables/number'
import type { ListType } from '~/types/spotting'
const { recommendPlaylist } = defineProps<{
  recommendPlaylist: ListType[]
}>()

const playerNumber = (value: number) => {
  const params = usrNumberFormat(value)
  return `${params.value}${params.unit}`
}
</script>

<template>
  <div class="mt-2">
    <h1 class="text-xl font-bold">
      推荐歌单 >
    </h1>
    <div class="flex justify-between flex-wrap mt-3">
      <div v-for="item in recommendPlaylist" :key="item.id" class="break-words w-35 mb-4 relative">
        <img :src="item.picUrl" class="w-35 h-35 rounded-1">
        <span class="mt-2 inline-block ">{{ item.name }}</span>
        <div class="absolute top-0 right-0 color-white text-xs flex items-center align-middle">
          <div i-carbon-play inline-block />
          <div>
            {{ playerNumber(item.playCount) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
