import type { SongsAl } from './header.d.ts'

interface SongListInfo {
  title: string
  singer: string
  albumInfo: SongsAl
  duration: number
  pop: number
  id: number
}

export interface SongsListData {
  totalCount: number
  songList: SongListInfo[]
}

export interface SongInfo {
  url: string
}