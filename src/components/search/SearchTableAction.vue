<script setup lang="ts">
import type { SongListInfo } from '~/types/search'

const { row, index } = defineProps<{
  row: SongListInfo
  index: number
}>()
const player = usePlayerStore()
const isPlaying = computed(() => player.currentPlayInfo.id === row.id)
const playingIcon = computed(() => player.playState === 'playing' ? 'i-carbon-volume-up-filled' : 'i-carbon-volume-down-filled')
</script>

<template>
  <div class="flex justify-around items-center">
    <span v-if="!isPlaying" class="w-6">{{ index.toString().padStart(2, '0') }}</span>
    <div v-else :class="playingIcon" color="#ec4141" />
    <div class="i-carbon-favorite" />
    <div class="i-carbon-download" />
  </div>
</template>
