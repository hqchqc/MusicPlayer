<script setup lang="ts">
import { fetchPlayListInfo } from '~/network/playlist'
import type { PlayList } from '~/types/playlist'
import type { SongsListData } from '~/types/search'

defineOptions({
  name: 'PlayListPage',
})
const router = useRouter()
const queryValue = computed(() => router.currentRoute.value.query)
const playListInfo = reactive<PlayList>({
  id: 0,
  name: '',
  description: '',
  playCount: 0,
  shareCount: 0,
  trackCount: 0,
  tracks: [],
  coverImgUrl: '',
  creator: {
    avatarUrl: '',
    nickname: '',
  },
  createTime: 0,
  tags: [],
  subscribedCount: 0,
  commentCount: 0,
})
const tableData = reactive<SongsListData>({
  totalCount: 0,
  songList: [],
})
const loading = ref(false)

const fetchPlayList = async () => {
  loading.value = true
  const msg = await fetchPlayListInfo(Number(queryValue.value.id) as number)
  const singList = msg?.playlist?.tracks.map(item => ({
    title: item.name,
    singer: item.ar?.[0].name,
    albumInfo: item.al,
    duration: item.dt,
    pop: item.pop,
    id: item.id,
    isNeedVip: item.fee === 1,
  }))
  Object.assign(playListInfo, msg?.playlist)

  tableData.totalCount = msg?.playlist?.trackCount as number
  tableData.songList = singList as SongsListData['songList']

  loading.value = false
}
onMounted(() => fetchPlayList())
</script>

<template>
  <div class="pt-8 px-[1.85rem]">
    <PlayListDetail :detail="playListInfo" :table-data="tableData" />
    <PlayListSings :table-data="tableData" :detail="playListInfo" :loading="loading" />
  </div>
</template>
