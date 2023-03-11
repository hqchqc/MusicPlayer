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