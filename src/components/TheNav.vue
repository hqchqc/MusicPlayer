<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { NAV_LIST } from '~/config/navConfig'
import { fetchUserPlayList } from '~/network/header'
import { useNavStore } from '~/stores/nav'
import { useRouteStore } from '~/stores/route'
import type { UserPlaylist } from '~/types/header'
const router = useRouter()
const route = useRouteStore()
const nav = useNavStore()
const user = useUserStore()
const { savedNavIndex } = storeToRefs(nav)
const { userInfo } = storeToRefs(user)
const userPlayList = reactive<UserPlaylist[]>([])

const { navList } = defineModel<{
  navList: { navName: string; navPath: string }[]
}>()

watchEffect(() => {
  nav.setNavIndex(NAV_LIST.findIndex(item => item.navPath === router.currentRoute.value.path))
  route.setBackSkip()
  route.setForwardSkip()
})

const fetchPlayList = async () => {
  if (userInfo.value.userId) {
    const msg = await fetchUserPlayList(user.userInfo.userId)
    Object.assign(userPlayList, msg?.playlist)
  }
}

const handleNav = (index: number) => {
  if (index !== 0)
    window.$message.warning('开发中哦🎶🎶🎶， 为您跳转至首页')

  else
    nav.setNavIndex(index)
}
onMounted(() => fetchPlayList())

watch(userInfo.value, () => fetchPlayList())
</script>

<template>
  <nav class="w-50 h-full border-r border-b-none bg-white">
    <ul class="px-2 pl-3 space-y-2 text-[0.9rem] mt-3">
      <RouterLink v-for="(navItem, index) in navList" :key="navItem.navPath" :to="index === 0 ? navItem.navPath : '/spotting'" class="block">
        <li
          class="cursor-pointer rounded py-1 pl-3" hover="bg-[#f6f6f7]"
          :class="savedNavIndex === index && 'text-base font-black bg-[#f6f6f7]'"
          @click="handleNav(index)"
        >
          {{ navItem.navName }}
        </li>
      </RouterLink>
    </ul>

    <span class="pl-5 inline-block color-[#999999] text-sm mt-3">创建的歌单</span>
    <ul class="pl-5 pr-2 space-y-2">
      <RouterLink v-for="(item, index) in userPlayList" v-show="index !== 0" :key="item.id" :to="`/playlist?id=${item.id}`" class="block">
        <li
          class="cursor-pointer  rounded py-1 flex items-center justify-start align-middle" hover="bg-[#f6f6f7]"
        >
          <div i-carbon-music class="w-4 mr-2" />
          <div class="color-[#333333] truncate">
            {{ item.name }}
          </div>
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>
