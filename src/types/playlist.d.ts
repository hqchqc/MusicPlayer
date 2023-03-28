export interface SongsInfo {
  name: string
  id: number
  al: SongsAl
  ar: SongsAr[]
  dt: number
  pop: number
  fee: number
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
  tracks: SongsInfo[]
  creator: CreatorInfo
  createTime: number
  tags: string[]
  subscribedCount: number
  commentCount: number
}

export interface PlayListInfo {
  code: number
  playlist: PlayList
}