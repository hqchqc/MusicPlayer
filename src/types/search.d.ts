interface SongsAl {
  id: number
  name: string
  picUrl: string
}

interface SongListInfo {
  title: string
  singer: string
  albumInfo: SongsAl
  duration: number
  pop: number
  id: number
  isNeedVip: boolean
  url?: string
}

export interface SongsListData {
  totalCount: number
  songList: SongListInfo[]
}

export interface SongInfo {
  url: string
}