<script setup lang="ts">
import { fetchPlayListInfo } from '~/network/playlist'
import type { PlayList } from '~/types/playlist'

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
})

const fetchPlayList = async () => {
  const msg = await fetchPlayListInfo(Number(queryValue.value.id) as number)
  Object.assign(playListInfo, msg?.playlist || {})
}
onMounted(() => fetchPlayList())
</script>

<template>
  <div class="pt-7 px-7">
    <PlayListDetail :detail="playListInfo" />
  </div>
</template>
