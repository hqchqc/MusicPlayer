<script setup lang="ts">
import { fetchSearchKeyWord } from '~/network/header'
import { columns, pagination } from '~/config/searchConfig'
import type { SongsListData } from '~/types/search'

defineOptions({
  name: 'SearchPage',
})

const router = useRouter()
const { keyword = '' } = reactive(router.currentRoute.value.query)
const songsList = reactive<SongsListData>({
  totalCount: 0,
  songList: [],
})
const loading = ref(false)

const fetchList = async (keyword: string, pageSize: number, offset: number) => {
  loading.value = true
  const searchList = await fetchSearchKeyWord(keyword, pageSize, offset)
  const songList = searchList?.result.songs.map(item => ({
    title: item.name,
    singer: item.ar?.[0]?.name,
    albumInfo: item.al,
    duration: item.dt,
    pop: item.pop,
    id: item.id,
  })) || []
  loading.value = false

  pagination.itemCount = searchList?.result.songCount || 0

  songsList.totalCount = searchList?.result.songCount || 0
  songsList.songList = songList
}

onMounted(async () => await fetchList(keyword as string, 100, 0))
</script>

<template>
  <div class="pt-5 px-8">
    <h1 class="text-lg font-bold">
      搜索 {{ keyword }}
    </h1>

    <div class="mt-5">
      <n-tabs animated>
        <n-tab-pane name="single" tab="单曲">
          <div class="mt-1">
            <SearchButton :songs-list="songsList" />
            <SearchTable
              :keyword="keyword as string"
              :table-data="songsList"
              :columns="columns"
              :loading="loading"
              :pagination="pagination"
              @fetch-list="fetchList"
            />
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
            找到 {{ songsList?.totalCount ?? 0 }} 首单曲
          </div>
        </template>
      </n-tabs>
    </div>
  </div>
</template>
