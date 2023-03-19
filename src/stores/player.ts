import { acceptHMRUpdate, defineStore } from 'pinia'
import { fetchSongUrl } from '~/network/search'
import type { PlayState } from '~/types/player'
import type { SongsListData } from '~/types/search'

export const usePlayerStore = defineStore('player', () => {
  const playlist = reactive<SongsListData>({
    totalCount: 0,
    songList: [],
  })
  const playState = ref<PlayState>('disabled')

  const currentPlayUrl = ref('')

  watch(playlist, async () => {
    const msg = await fetchSongUrl(playlist.songList[0].id)
    currentPlayUrl.value = msg?.url ?? `https://music.163.com/song/media/outer/url?id=${playlist.songList[0].id}.mp3`
  })

  function setPlayList(newPlayList: SongsListData) {
    playlist.totalCount = newPlayList.totalCount
    playlist.songList = newPlayList.songList
  }

  function setPlayState(newPlayState: PlayState) {
    playState.value = newPlayState
  }

  return {
    playlist,
    playState,
    currentPlayUrl,
    setPlayList,
    setPlayState,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
