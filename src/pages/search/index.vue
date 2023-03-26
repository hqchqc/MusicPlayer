<script setup lang="ts">
import { fetchSearchKeyWord } from '~/network/header'
import { columns, pagination } from '~/config/searchConfig'
import type { SongsListData } from '~/types/search'

defineOptions({
  name: 'SearchPage',
})

const router = useRouter()
const queryValue = computed(() => router.currentRoute.value.query)
const songsList = reactive<SongsListData>({
  totalCount: 0,
  songList: [],
})
const loading = ref(false)

const fetchList = async (pageSize: number, offset: number) => {
  loading.value = true
  const searchList = await fetchSearchKeyWord(queryValue.value.keyword as string, pageSize, offset)
  const songList = searchList?.result.songs.map(item => ({
    title: item.name,
    singer: item.ar?.[0]?.name,
    albumInfo: item.al,
    duration: item.dt,
    pop: item.pop,
    id: item.id,
    isNeedVip: item.fee === 1,
  })) || []
  loading.value = false

  pagination.itemCount = searchList?.result.songCount || 0

  songsList.totalCount = searchList?.result.songCount || 0
  songsList.songList = songList
}

onMounted(async () => await fetchList(100, 0))

watch(queryValue, () => fetchList(100, 0))
</script>

<template>
  <div class="pt-5 px-8">
    <h1 class="text-lg font-bold">
      搜索 {{ queryValue.keyword }}
    </h1>

    <div class="mt-5">
      <n-tabs animated>
        <n-tab-pane name="single" tab="单曲">
          <div class="mt-1">
            <SearchButton :songs-list="songsList" />
            <SearchTable
              :table-data="songsList"
              :columns="columns"
              :loading="loading"
              :pagination="pagination"
              @fetch-list="fetchList"
            />
          </div>
        </n-tab-pane>
        <n-tab-pane name="singer" tab="歌手" disabled>
          歌手
        </n-tab-pane>
        <n-tab-pane name="video" tab="视频" disabled>
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

<style>
.scrollbar::-webkit-scrollbar{
  width:10px;
  height:5px;
}
.scrollbar::-webkit-scrollbar-thumb{
  height: 10px;
  background: #e0e0e0;
  border-radius:10px;
}
.scrollbar::-webkit-scrollbar-thumb:hover{
  background: #d4d4d4;
}
.scrollbar::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>
