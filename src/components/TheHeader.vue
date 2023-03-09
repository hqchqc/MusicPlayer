<script setup lang="ts">
import logoPic from '~/assets/logo.png'
import avatarOut from '~/assets/avatar_out.png'
import vipPic from '~/assets/vip.png'
import defaultImg from '~/assets/defaultImg.svg'
import { useRouteStore } from '~/stores/route'
const router = useRouter()
const route = useRouteStore()
const showModal = ref(false)
const qrImg = ref('')

const { searchPlaceholder } = defineModel<{
  searchPlaceholder: string
}>()

const fetchQrKey = async () => {
  const { data, execute } = usePost<{ unikey: string }>('login/qr/key')
  await execute()
  return data.value?.unikey || ''
}

const fetchQrImg = async (unikey: string) => {
  const { data, execute } = usePost<{ qrurl: string; qrimg: string }>(`login/qr/create?key=${unikey}&qrimg=true`)
  await execute()
  return data.value?.qrimg || ''
}

const fetchCheckStatus = async (unikey: string) => {
  const { data, execute } = usePost(`login/qr/check?key=${unikey}&timestamp=${Date.now()}`)
  await execute()
  console.log('data.value', data.value)
  return data.value
}

const fetchLoginStatus = async (cookie: string) => {
  const { data, execute } = usePost(`login/status?timestamp=${Date.now()}`, { cookie })
  await execute()
  return Boolean(data.value?.data.profile)
}

const handleLogin = async () => {
  showModal.value = true
  let timer: NodeJS.Timeout | null = null
  const cookie = useStorage('cookie', '')
  const isLogin = await fetchLoginStatus(cookie.value)
  const key = await fetchQrKey()
  qrImg.value = await fetchQrImg(key)

  timer = setInterval(async () => {
    const statusRes = await fetchCheckStatus(key)
    console.log('statusRes', statusRes)
    if (statusRes.code === 800) {
      console.log('二维码已过期,请重新获取')
      clearInterval(timer)
    }
    if (statusRes.code === 803) {
      clearInterval(timer)
      console.log('授权成功！')
      await fetchLoginStatus(statusRes.cookie)
      useStorage('cookie', statusRes.cookie)
    }
  }, 3000)
}
</script>

<template>
  <header class="h-15 bg-[#ec4141] relative px-5 leading-15 overflow-hidden">
    <!-- 左侧logo -->
    <div class="absolute w-30 top-[50%] translate-y-[-50%] cursor-pointer" @click="router.push('/spotting')">
      <img :src="logoPic">
    </div>

    <!-- 中间导航及搜索 -->
    <div class="absolute top-[50%] translate-y-[-50%] ml-52">
      <div class="flex items-center align-middle">
        <NButton strong secondary circle class=" bg-[#da3c3c] w-6 h-6" @click="route.isBackSkip && router.go(-1)">
          <template #icon>
            <div i-carbon-chevron-left class="w-4 h-4 color-white" :class="!(route.isBackSkip) && '!color-[#e57373]'" />
          </template>
        </NButton>

        <NButton strong secondary circle class=" bg-[#da3c3c] w-6 h-6 ml-2" @click="route.isForwardSkip && router.go(1)">
          <template #icon>
            <div i-carbon-chevron-right class="w-4 h-4 color-white" :class="!(route.isForwardSkip) && '!color-[#e57373]'" />
          </template>
        </NButton>

        <NInput size="small" round :placeholder="searchPlaceholder" class="ml-3 bg-[#e33e3e] ">
          <template #prefix>
            <div i-carbon-search class="color-[#f8cfcf]" />
          </template>
        </NInput>
      </div>
    </div>

    <!-- 右侧头像 -->
    <div class="absolute right-5 left-221 cursor-pointer" @click="handleLogin">
      <img :src="avatarOut" class="w-7 h-7 rounded-[50%] inline-block ">
      <span class="color-[#fbd9d9] px-1 text-xs tracking-tighter">未登录</span>
      <img :src="vipPic" class="w-9 inline-block">
    </div>

    <n-modal v-model:show="showModal">
      <div class="flex flex-col items-center align-middle p-5 bg-white">
        <h1>扫码登录</h1>
        <n-image
          class="w-40 h-40 p-4"
          :placeholder="defaultImg"
          :src="qrImg"
        />
        <span>使用网易云音乐APP扫码登录</span>
        <span class="mt-10">游客登录 >
        </span>
      </div>
    </n-modal>
  </header>
</template>
