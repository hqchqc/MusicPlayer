<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { NAV_LIST } from '~/layouts/config'
import { useNavStore } from '~/stores/nav'
import { useRouteStore } from '~/stores/route'
const router = useRouter()
const route = useRouteStore()
const nav = useNavStore()
const { savedNavIndex } = storeToRefs(nav)

const { navList } = defineModel<{
  navList: { navName: string; navPath: string }[]
}>()

watchEffect(() => {
  nav.setNavIndex(NAV_LIST.findIndex(item => item.navPath === router.currentRoute.value.path))
  route.setBackSkip()
  route.setForwardSkip()
})
</script>

<template>
  <nav class="w-50 h-full border-r border-b-none bg-white">
    <ul class="px-2 pl-3 space-y-2 text-[0.9rem] mt-3">
      <RouterLink v-for="(navItem, index) in navList" :key="navItem.navPath" :to="navItem.navPath" class="block">
        <li class="cursor-pointer rounded py-1 pl-3" hover="bg-[#f6f6f7]" :class="savedNavIndex === index && 'text-base font-black bg-[#f6f6f7]'" @click="nav.setNavIndex(index)">
          {{ navItem.navName }}
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>
