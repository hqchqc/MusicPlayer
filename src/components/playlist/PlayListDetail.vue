<script setup lang="ts">
import type { PlayList } from '~/types/playlist'

const { detail } = defineProps<{
  detail: PlayList
}>()
</script>

<template>
  <div class="flex">
    <!-- left -->
    <div>
      <img
        :src="detail.coverImgUrl"
        class="w-46 h-46 rounded-2"
      >
    </div>

    <!-- right -->
    <div class="ml-5">
      <!-- 第一行 标题 -->
      <div class="flex justify-start align-middle items-center">
        <div class="flex justify-center align-middle items-center">
          <h1 class="color-[#ed4141] border-[#ed4141] text-center leading-5  border text-xs w-9 h-5 rounded-1">
            歌单
          </h1>
          <h1 class="text-xl font-bold ml-3 tracking-widest">
            {{ detail.name }}
          </h1>
        </div>
      </div>

      <!-- 第二行 创建人 -->
      <div class="flex align-middle items-center mt-2 mb-4">
        <div>
          <img
            :src="detail.creator.avatarUrl"
            class="w-6 h-6 rounded-3"
          >
        </div>
        <div class="mx-2 text-xs">
          {{ detail.creator.nickname }}
        </div>
        <div class="text-xs color-[#666666] tracking-tight">
          {{ useDateFormat(detail.createTime, 'YYYY-MM-DD').value }}创建
        </div>
      </div>

      <!-- 第三行 按钮组 -->
      <div class="mb-3">
        <n-button-group>
          <NButton round color="#ec4141" class="bg-[#ec4141] pr-1">
            <template #icon>
              <div class="i-carbon-play-filled-alt" />
            </template>
            播放全部
          </NButton>
          <NButton round color="#ec4141" class="bg-[#ec4141] pl-1 pr-3">
            <template #icon>
              <div class="i-carbon-add" />
            </template>
          </NButton>
        </n-button-group>

        <NButton round class="ml-3 hover:bg-[#da3c3c]" disabled>
          <template #icon>
            <div class="i-carbon-folder-add" />
          </template>
          收藏({{ usrNumberFormat(detail.subscribedCount, 0) }})
        </NButton>
      </div>

      <!-- 第四行 标签 歌曲 简介 -->
      <div>
        <div>
          标签: {{ detail.tags.join(' / ') }}
        </div>
        <div class="my-1">
          <span>
            歌曲：{{ detail.trackCount }}
          </span>
          <span class="ml-2">
            播放：{{ usrNumberFormat(detail.playCount, 0) }}
          </span>
        </div>
        <div class="flex  align-middle items-center">
          简介：
          <pre class="truncate max-w-120 truncate inline-block text-xs color-[#6e6e6e]">
            {{ detail.description }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
