<script setup lang="ts">
import type { BannerType } from '~/types/spotting'

const { bannerInfo } = defineProps<{
  bannerInfo: BannerType[]
}>()
</script>

<template>
  <n-carousel
    prev-slide-style="transform: translateX(-150%) translateZ(-250px);"
    next-slide-style="transform: translateX(50%) translateZ(-250px);"
    class="h-58 mt-2"
    show-dots
    dot-placement="bottom"
    autoplay
    effect="card"
    :interval="Number(2000)"
  >
    <n-carousel-item v-for="item in bannerInfo" :key="item.imageUrl" :style="{ width: '72%' }" class="rounded-2 duration-1000! relative">
      <img
        class="rounded-2"
        :src="item.imageUrl"
      >
      <p class="absolute bottom-[1.85rem] right-0 color-white bg-[#cc4a4a] px-2 rounded-br-2 rounded-tl-2">
        {{ item.typeTitle }}
      </p>
    </n-carousel-item>
  </n-carousel>
</template>

<style scoped>
</style>
