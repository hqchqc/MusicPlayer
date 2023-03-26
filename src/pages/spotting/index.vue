<script setup lang="ts">
import { tabThemeOverrides } from '~/config/spotting'
import { fetchCarousel, fetchPlaylist } from '~/network/spotting'
import type { BannerType, ListType } from '~/types/spotting'
defineOptions({
  name: 'SpottingPage',
})
const bannerInfo = reactive<BannerType[]>([])
const recommendList = reactive<ListType[]>([])
const fetchBanner = async () => {
  const msg = await fetchCarousel()
  Object.assign(bannerInfo, msg?.banners)
}

const fetchList = async () => {
  const msg = await fetchPlaylist()
  Object.assign(recommendList, msg?.result)
}

onMounted(() => {
  fetchBanner()
  fetchList()
})
</script>

<template>
  <div class="pl-8 pr-4 py-3">
    <n-tabs animated :theme-overrides="tabThemeOverrides">
      <n-tab-pane name="recommendation" tab="个性推荐">
        <SpottingCarousel :banner-info="bannerInfo" />
        <SpottingRecommend :recommend-playlist="recommendList" />
      </n-tab-pane>
      <n-tab-pane name="rankingList" tab="排行榜" disabled>
        排行榜
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
