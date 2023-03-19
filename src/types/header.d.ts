export interface QrKey {
  unikey: string
}

export interface QrImg {
  qrimg: string
}

export interface CheckStatus {
  code: number;
  cookie: string;
  message: string
}

interface Profile {
  avatarUrl: string; 
  userId: number; 
  nickname: string
}

export interface LoginStatus {
  profile: Profile
}

export interface HotSearch {
  content: string
  searchWord: string
  iconUrl: string
  alg: string
  score: number
  iconType: 0 | 1
}

export interface SongsAl {
  id: number
  name: string
}

interface SongsAr {
  id: number
  name: string
}

export interface SongsInfo {
  name: string
  id: number
  al: SongsAl
  ar: SongsAr[]
  dt: number
  pop: number
}

interface SearchDetailInfo {
  songCount: number
  songs: SongsInfo[]
}

export interface SearchList {
  code: number
  result: SearchDetailInfo
}