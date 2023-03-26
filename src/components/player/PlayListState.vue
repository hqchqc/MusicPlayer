<script setup lang="ts">
import type { SongListInfo } from '~/types/search'
const { row } = defineProps<{
  row: SongListInfo
}>()
const player = usePlayerStore()
const isPlaying = computed(() => player.currentPlayInfo.id === row.id)
const playingIcon = computed(() => player.playState === 'playing' ? 'i-carbon-play-filled-alt' : 'i-carbon-pause-filled')
</script>

<template>
  <div v-show="isPlaying">
    <div
      color="#ec4141"
      :class="playingIcon"
    />
  </div>
</template>
