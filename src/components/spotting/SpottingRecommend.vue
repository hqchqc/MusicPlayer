<script setup lang="ts">
import { usrNumberFormat } from '~/composables/number'
import type { ListType } from '~/types/spotting'
const { recommendPlaylist } = defineProps<{
  recommendPlaylist: ListType[]
}>()
const router = useRouter()

const handlePlayList = (item: ListType) => {
  router.push(`/playlist?id=${item.id}`)
}
</script>

<template>
  <div class="mt-2">
    <h1 class="text-xl font-bold">
      推荐歌单 >
    </h1>
    <div class="flex justify-between flex-wrap mt-3">
      <div v-for="item in recommendPlaylist" :key="item.id" class="break-words w-35 mb-4 relative " @click="handlePlayList(item)">
        <div class="playIcon">
          <img :src="item.picUrl" class="w-35 h-35 rounded-1 cursor-pointer">
          <div i-carbon-play-outline-filled color="#ec4141" w-8 h-8 bottom-15 right-2 absolute class="playIconChild" />
        </div>

        <span class="mt-2 inline-block color-[#333333] hover:color-[black] hover:font-500 cursor-pointer">{{ item.name }}</span>
        <div class="absolute top-1 right-1 color-white text-xs flex items-center align-middle">
          <div i-carbon-play inline-block />
          <div>
            {{ usrNumberFormat(item.playCount, 0) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playIcon .playIconChild{
  display: none;
}
.playIcon:hover .playIconChild{
  display: inline-block;
}
</style>
