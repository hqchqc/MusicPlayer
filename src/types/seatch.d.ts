interface SongListInfo {
  title: string
  singer: string
  albumInfo: string
  duration: number
  pop: string
}

interface SongsListData {
  totalCount: number
  songList: songListInfo[]
}