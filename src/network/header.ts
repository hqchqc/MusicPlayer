import type { CheckStatus, HotSearch, LoginStatus, QrImg, QrKey } from '~/types/header'

// 1. 获取请求二维码key
export const fetchQrKey = async () => {
  const { data, execute } = usePost<QrKey>('login/qr/key')
  await execute()
  return data.value?.unikey || ''
}

// 2. 获取二维码
export const fetchQrImg = async (unikey: string) => {
  const { data, execute } = usePost<QrImg>(`login/qr/create?key=${unikey}&qrimg=true`)
  await execute()
  return data.value?.qrimg || ''
}

// 3. 检查二维码状态
export const fetchCheckStatus = async (unikey: string) => {
  const { data, execute } = usePost<CheckStatus>(`login/qr/check?key=${unikey}&timestamp=${Date.now()}`)
  await execute()
  return data.value
}

// 4. 检查登录状态
export const fetchLoginStatus = async (cookie: string) => {
  const { data, execute } = usePost<LoginStatus>(`login/status?timestamp=${Date.now()}`, { cookie })
  await execute()
  return data.value
}

// 5. 获取热搜列表(详细)
export const fetchHotSearch = async () => {
  const { data, execute } = usePost<HotSearch[]>('search/hot/detail')
  await execute()
  return data.value
}

// 6. 搜索
export const fetchSearchKeyWord = async (keywords: string) => {
  const { data, execute } = usePost(`cloudsearch?keywords=${keywords}`)
  await execute()
  return data.value
}
