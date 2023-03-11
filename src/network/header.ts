import type { CheckStatus, LoginStatus, QrImg, QrKey } from '~/types/header'

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
