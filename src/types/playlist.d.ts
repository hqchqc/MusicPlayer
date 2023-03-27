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

interface CreatorInfo{
  avatarUrl: string
  nickname: string
}

export interface PlayList {
  id: number
  name: string
  description: string
  playCount: number
  shareCount: number
  trackCount: number
  coverImgUrl: string
  tracks: SongListInfo[]
  creator: CreatorInfo
  createTime: number
  tags: string[]
  subscribedCount: number
}

export interface PlayListInfo {
  code: number
  playlist: PlayList
}