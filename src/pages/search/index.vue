<script setup lang="ts">
import { fetchSearchKeyWord } from '~/network/header'

defineOptions({
  name: 'SearchPage',
})

const router = useRouter()
const { keyword = '' } = router.currentRoute.value.query
const songsList = ref<any>({})

const fetchList = async (keyword: string, pageSize: number, offset: number) => {
  const searchList = await fetchSearchKeyWord(keyword, pageSize, offset)
  const songList = searchList?.result.songs.map(item => ({
    title: item.name,
    singer: item.ar?.[0]?.name,
    albumInfo: item.al,
    duration: item.dt,
    pop: item.pop,
  }))
  return {
    totalCount: searchList?.result.songCount || 0,
    songList,
  }
}

onMounted(async () => {
  const msg = await fetchList(keyword as string, 100, 0)
  songsList.value = msg
  // data.value = songList as Song[]
  // totalCount.value = searchList?.result.songCount || 0
  // pagination.itemCount = searchList?.result.songCount || 0
  // pagination.pageCount = Math.ceil((searchList?.result.songCount || 0) / pagination.pageSize)
  // tableLoading.value = false
})
</script>

<template>
  <div class="pt-5 px-8">
    <h1 class="text-lg font-bold">
      搜索 {{ keyword }}
    </h1>

    <div class="mt-5">
      <n-tabs animated>
        <n-tab-pane name="oasis" tab="单曲">
          <div class="mt-1">
            <SearchButton />
            <SearchTable :keyword="keyword as string" :table-data="songsList" />
          </div>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="歌手">
          歌手
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="视频">
          视频
        </n-tab-pane>

        <template #suffix>
          <div class="color-[#999999] text-xs">
            找到 {{ songsList.totalCount }} 首单曲
          </div>
        </template>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped>
.song-table::v-deep(.n-data-table__pagination) {
  justify-content: center;
}
.song-table::v-deep(.n-data-table__pagination) {
  margin: 12px 0 12px 0;
}
</style>
