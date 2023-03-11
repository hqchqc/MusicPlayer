<script setup lang="ts">
defineOptions({
  name: 'SearchPage',
})
</script>

<template>
  <div class="pt-5 pl-8 bg-white w-[calc(100%-12.5rem)]">
    <h1 class="text-lg font-bold">
      搜索 乌梅子酱
    </h1>

    <div class="mt-5">
      <n-tabs animated>
        <n-tab-pane name="oasis" tab="单曲">
          <div class="mt-1">
            <n-button-group>
              <n-button round color="#ec4141" class="bg-[#ec4141] pr-1">
                <template #icon>
                  <div class="i-carbon-play-filled-alt" />
                </template>
                播放全部
              </n-button>
              <n-button round color="#ec4141" class="bg-[#ec4141] pl-1 pr-3">
                <template #icon>
                  <div class="i-carbon-add" />
                </template>
              </n-button>
            </n-button-group>

            <n-button round class="ml-3">
              <template #icon>
                <div class="i-carbon-download" />
              </template>
              下载全部
            </n-button>
          </div>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="歌手">
          歌手
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="视频">
          视频
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
