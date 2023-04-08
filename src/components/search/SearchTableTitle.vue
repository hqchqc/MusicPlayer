<script setup lang="ts">
import { NEllipsis } from 'naive-ui'
import type { SongListInfo } from '~/types/search'

const { row } = defineProps<{
  row: SongListInfo
}>()
const player = usePlayerStore()
const isPlaying = computed(() => player.currentPlayInfo.id === row.id)
function handleDbClick(row: SongListInfo) {
  player.playSingByDb(row)
}
</script>

<template>
  <div class="flex justify-start items-center" @dblclick="handleDbClick(row)">
    <NEllipsis style="max-width: 100px" :class="isPlaying ? 'color-[#ed4141]' : 'color-[#333333]'">
      {{ row.title }}
    </NEllipsis>
    <div class="flex ml-4 justify-between w-18 align-middle items-center">
      <div v-show="row.isNeedVip" class="border-[#fe672e] border inline-block color-[#fd7e4e] px-1 leading-3">
        VIP
      </div>
      <div v-show="row.isNeedVip" class="border-[#fe672e] border inline-block color-[#fd7e4e] px-1 leading-3">
        试听
      </div>
    </div>
  </div>
</template>
