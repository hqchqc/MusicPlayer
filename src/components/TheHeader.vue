<script setup lang="ts">
import logoPic from '~/assets/logo.png'
import avatarPic from '~/assets/avatar.jpg'
import vipPic from '~/assets/vip.png'
</script>

<template>
  <header class="h-15 bg-[#ec4141] relative px-5 leading-15 overflow-hidden">
    <!-- 左侧logo -->
    <div class="absolute w-30 top-[50%] translate-y-[-50%]">
      <img :src="logoPic">
    </div>

    <!-- 中间导航及搜索 -->
    <div class="absolute top-[50%] translate-y-[-50%] ml-52">
      <div class="flex items-center align-middle">
        <n-button strong secondary circle class=" bg-[#da3c3c] w-6 h-6 ">
          <template #icon>
            <div i-carbon-chevron-left class="w-4 h-4 color-white" />
          </template>
        </n-button>

        <n-button strong secondary circle class=" bg-[#da3c3c] w-6 h-6 ml-2">
          <template #icon>
            <div i-carbon-chevron-right class="w-4 h-4 color-white" />
          </template>
        </n-button>

        <n-input size="small" round placeholder="浪漫血液-林俊杰" class="ml-3 bg-[#e33e3e] ">
          <template #prefix>
            <div i-carbon-search class="color-[#f8cfcf]" />
          </template>
        </n-input>
      </div>
    </div>

    <!-- 右侧头像 -->
    <div class="absolute right-5 left-221">
      <img :src="avatarPic" class="w-7 h-7 rounded-[50%] inline-block">
      <span class="color-white px-1 text-xs tracking-tighter">hqc-hqc</span>
      <img :src="vipPic" class="w-9 inline-block">
    </div>
  </header>
</template>