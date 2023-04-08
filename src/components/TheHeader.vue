<script setup lang="ts">
import logoPic from '~/assets/logo.png'
import avatarOut from '~/assets/avatar_out.png'
import vipPic from '~/assets/vip.png'
import defaultImg from '~/assets/defaultImg.svg'
import { useRouteStore } from '~/stores/route'
import { fetchCheckStatus, fetchHotSearch, fetchLoginStatus, fetchQrImg, fetchQrKey } from '~/network/header'
import type { HotSearch, LoginStatus } from '~/types/header'

const router = useRouter()
const route = useRouteStore()
const user = useUserStore()
const showModal = ref(false)
const qrImg = ref('')
const loginInfo = ref<LoginStatus>()
const loading = ref(false)
const hotSearch = ref<HotSearch[]>()
const inputValue = ref('')
const searchLoading = ref(true)
const showPopover = ref(false)
let timer: NodeJS.Timeout

const { searchPlaceholder } = defineModels<{
  searchPlaceholder: string
}>()

async function handleLogin() {
  const cookie = useStorage('cookie', '')

  const loginStatus = await fetchLoginStatus(cookie.value)
  loginInfo.value = loginStatus as LoginStatus

  if (loginInfo.value?.profile) {
    // 已经登录
    showModal.value = false
    window.$message.warning('您已登录,请勿重复登录')
    const { nickname = '', avatarUrl = '', userId = 0 } = loginInfo.value.profile
    user.setUserInfo({
      nickname,
      avatarUrl,
      userId,
    })
  }
  else {
    showModal.value = true
    loading.value = true
    // 没有登录
    const key = await fetchQrKey()
    qrImg.value = await fetchQrImg(key)
    loading.value = false

    timer = setInterval(async () => {
      const statusRes = await fetchCheckStatus(key)
      if (statusRes?.code === 800) {
        clearInterval(timer)
        window.$message.warning(statusRes.message)
      }
      if (statusRes?.code === 803) {
        clearInterval(timer)
        const loginInfo = await fetchLoginStatus(statusRes.cookie)
        if (loginInfo?.profile) {
          const { nickname = '', avatarUrl = '', userId = 0 } = loginInfo.profile
          user.setUserInfo({
            nickname,
            avatarUrl,
            userId,
          })
          cookie.value = statusRes.cookie
          showModal.value = false
          window.$message.success(statusRes.message)
        }
        else {
          window.$message.warning('登录失败~')
        }
      }
    }, 3000)
  }
}

function handleClose() {
  return timer && clearInterval(timer)
}

async function handleSearch() {
  showPopover.value = true

  const hotSearchList = await fetchHotSearch()
  hotSearch.value = hotSearchList as HotSearch[]
  searchLoading.value = false
}

async function handleWordSearch(word: string) {
  inputValue.value = word
  router.push(`/search?keyword=${word}`)
}

function handleEnter() {
  if (inputValue.value)
    router.push(`/search?keyword=${inputValue.value}`)
  else
    router.push(`/search?keyword=${searchPlaceholder.value}`)
}

async function handleTouristLogin() {
  // const msg = await fetchTouristLogin()
  // console.log('msg', msg)
  window.$message.info('开发中哦🎶🎶🎶')
}

onMounted(async () => {
  const cookie = useStorage('cookie', '')
  const loginStatus = await fetchLoginStatus(cookie.value)
  loginInfo.value = loginStatus as LoginStatus
  if (loginStatus?.profile) {
    const { nickname = '', avatarUrl = '', userId = 0 } = loginStatus.profile
    user.setUserInfo({
      nickname,
      avatarUrl,
      userId,
    })
  }
})
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

        <n-popover trigger="click" placement="bottom" :show-arrow="false" :show="showPopover" scrollable class="max-h-[32rem]">
          <template #trigger>
            <NInput
              v-model:value="inputValue" size="small" round :placeholder="searchPlaceholder" class="ml-3 bg-[#e33e3e] "
              @click="handleSearch" @blur="showPopover = false"
              @keyup.enter="handleEnter"
            >
              <template #prefix>
                <div i-carbon-search class="color-[#f8cfcf]" />
              </template>
            </NInput>
          </template>
          <div class="w-88 pt-4 min-h-[30rem]">
            <n-text strong depth="1" class="color-[#666666] mx-5 text-sm">
              热搜榜
            </n-text>

            <n-spin :show="searchLoading">
              <div class="border-t mt-3 ">
                <div v-for="(searchItem, index) in hotSearch" :key="searchItem.searchWord" class="h-14 flex align-middle cursor-pointer hover:bg-[#f2f2f2] transition-none delay-99999" @click="handleWordSearch(searchItem.searchWord)">
                  <div class="flex items-center align-middle ">
                    <div class="w-10 text-base ml-5" :class="index <= 2 ? 'color-[#fd5757] text-lg' : 'color-[#e1e1e1] text-base '">
                      <span>{{ index + 1 }}</span>
                    </div>
                    <div class="flex flex-col">
                      <div>
                        <span :class="index <= 2 ? 'text-xs font-700' : 'text-xs'">{{ searchItem.searchWord }}</span>
                        <span class="text-sm mx-2 color-[#dadada]">{{ searchItem.score }}</span>
                        <img v-show="searchItem.iconUrl && searchItem.alg !== 'featured'" :src="searchItem.iconUrl" alt="icon" class="h-3 inline-block">
                      </div>

                      <div>
                        <span class="text-xs color-[#999999] text-ellipsis">{{ searchItem.content }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </n-spin>
          </div>
        </n-popover>
      </div>
    </div>

    <!-- 右侧头像 -->
    <div class="absolute right-5 left-221 cursor-pointer" @click="handleLogin">
      <img :src="user.userInfo.avatarUrl || avatarOut" class="w-7 h-7 rounded-[50%] inline-block ">
      <span class="color-[#fbd9d9] px-1 text-xs tracking-tighter">{{ user.userInfo.nickname || '未登录' }}</span>
      <img :src="vipPic" class="w-9 inline-block">
    </div>

    <n-modal v-model:show="showModal" :on-after-leave="handleClose">
      <div class="flex flex-col items-center align-middle p-5 bg-white">
        <h1>扫码登录</h1>
        <n-spin :show="loading">
          <n-image
            class="w-40 h-40 p-4"
            :placeholder="defaultImg"
            :src="qrImg"
          />
        </n-spin>
        <span>使用网易云音乐APP扫码登录</span>
        <span class="mt-10" @click="handleTouristLogin">游客登录 >
        </span>
      </div>
    </n-modal>
  </header>
</template>
