import { acceptHMRUpdate, defineStore } from 'pinia'
import { fetchSongUrl } from '~/network/search'
import type { PlayMode, PlayState } from '~/types/player'
import type { SongListInfo, SongsListData } from '~/types/search'

export const usePlayerStore = defineStore('player', () => {
  // 播放列表
  const playlist = reactive<SongsListData>({
    totalCount: 0,
    songList: [],
  })
  // 播放状态
  const playState = ref<PlayState>('disabled')
  // 当前播放歌曲信息
  const currentPlayInfo = reactive<SongListInfo>({
    title: '',
    singer: '',
    duration: 0,
    pop: 0,
    id: 0,
    isNeedVip: false,
    url: '',
    albumInfo: {
      id: 0,
      name: '',
      picUrl: '',
    },
  })
  // 音乐播放器ref
  const audio = ref<HTMLAudioElement>()

  watch(playState, () => {
    if (playState.value === 'playing')
      audio.value?.play()
    if (playState.value === 'pause')
      audio.value?.pause()
  })

  async function playSing(mode: PlayMode = 'current') {
    playState.value = 'pause'
    let index = 0
    if (mode === 'after' || mode === 'before')
      index = playlist.songList.findIndex(item => item.id === currentPlayInfo.id)

    const playIndex = mode === 'current' ? index : mode === 'after' ? index + 1 : index - 1

    if (playIndex >= 0) {
      const msg = await fetchSongUrl(playlist.songList[playIndex].id)
      Object.assign(currentPlayInfo, {
        ...playlist.songList[playIndex],
        url: Array.isArray(msg) ? msg?.[0]?.url : `https://music.163.com/song/media/outer/url?id=${playlist.songList[playIndex].id}.mp3`,
      })
      playState.value = 'playing'
    }
    else {
      window.$message.info('没有歌曲啦~')
    }
  }

  // 存在于当前的播放列表中 需要提前播放
  async function playSingById(id: number) {
    playState.value = 'pause'
    const index = playlist.songList.findIndex(item => item.id === id)

    if (index !== -1) {
      const msg = await fetchSongUrl(id)

      Object.assign(currentPlayInfo, {
        ...playlist.songList[index],
        url: Array.isArray(msg) ? msg?.[0]?.url : `https://music.163.com/song/media/outer/url?id=${playlist.songList[index].id}.mp3`,
      })
    }
    playState.value = 'playing'
  }

  function playSingByDb(row: SongListInfo) {
    const isInPlayList = playlist.songList.find(item => item.id === row.id)

    if (!isInPlayList) {
      playlist.songList.unshift(row)
      playSing()
    }
    else { playSingById(row.id) }
  }

  function setPlayList(newPlayList: SongsListData) {
    playlist.totalCount = newPlayList.totalCount
    playlist.songList = newPlayList.songList
  }

  function setPlayState(newPlayState: PlayState) {
    playState.value = newPlayState
  }

  function setAudioInstance(audioRef: HTMLAudioElement) {
    audio.value = audioRef
  }

  return {
    playlist,
    playState,
    currentPlayInfo,
    playSing,
    playSingByDb,
    setPlayList,
    setPlayState,
    setAudioInstance,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
