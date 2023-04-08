import type { CheckStatus, HotSearch, LoginStatus, QrImg, QrKey, SearchList, UserListInfo } from '~/types/header'

// 1. 获取请求二维码key
export async function fetchQrKey() {
  const { data, execute } = usePost<QrKey>('login/qr/key')
  await execute()
  return data.value?.unikey || ''
}

// 2. 获取二维码
export async function fetchQrImg(unikey: string) {
  const { data, execute } = usePost<QrImg>(`login/qr/create?key=${unikey}&qrimg=true`)
  await execute()
  return data.value?.qrimg || ''
}

// 3. 检查二维码状态
export async function fetchCheckStatus(unikey: string) {
  const { data, execute } = usePost<CheckStatus>(`login/qr/check?key=${unikey}&timestamp=${Date.now()}`)
  await execute()
  return data.value
}

// 4. 检查登录状态
export async function fetchLoginStatus(cookie: string) {
  const { data, execute } = usePost<LoginStatus>(`login/status?timestamp=${Date.now()}`, { cookie })
  await execute()
  return data.value
}

// 5. 获取热搜列表(详细)
export async function fetchHotSearch() {
  const { data, execute } = usePost<HotSearch[]>('search/hot/detail')
  await execute()
  return data.value
}

// 6. 搜索
export async function fetchSearchKeyWord(keywords: string, limit = 30, offset = 0, type = 1) {
  const { data, execute } = usePost<SearchList>(`cloudsearch?keywords=${keywords}&type=${type}&limit=${limit}&offset=${offset}`)
  await execute()
  return data.value
}

// 7. 获取用户歌单
export async function fetchUserPlayList(uid: number) {
  const { data, execute } = usePost<UserListInfo>(`user/playlist?uid=${uid}`)
  await execute()
  return data.value
}

// 8. 游客登录
export async function fetchTouristLogin() {
  const { data, execute } = usePost('register/anonimous')
  await execute()
  return data.value
}
