<script setup lang="ts">
const navList = ['发现音乐', '播客', '视频', '关注', '直播', '私人FM']

const activeIndex = ref(0)

const handleClick = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <nav class="w-50 h-[calc(100%-3.75rem)] border border-b-none bg-white">
    <ul class="px-2 pl-3 space-y-2 text-[0.9rem] mt-3">
      <li v-for="(navItem, index) in navList" :key="navItem" class="cursor-pointer rounded py-1 pl-3" hover="bg-[#f6f6f7]" :class="activeIndex === index && 'text-base font-black bg-[#f6f6f7]'" @click="handleClick(index)">
        {{ navItem }}
      </li>
    </ul>
  </nav>
</template>
