<script setup lang="ts">
import { buttonThemeOverrides } from '~/config/searchConfig'
import type { SongsListData } from '~/types/search'

const { songsList } = defineProps<{
  songsList: SongsListData
}>()

const showModal = ref(false)
const player = usePlayerStore()

async function submitCallback() {
  player.setPlayList(songsList)
  player.playSing()
}

function handlePlayAll() {
  showModal.value = true
}

function handleAddPlayList() {
  player.setPlayList(songsList)
  window.$message.success('已替换当前播放列表')
}
</script>

<template>
  <n-button-group class="mb-5">
    <NButton round color="#ec4141" class="bg-[#ec4141] pr-1" @click="handlePlayAll">
      <template #icon>
        <div class="i-carbon-play-filled-alt" />
      </template>
      播放全部
    </NButton>
    <NButton round color="#ec4141" class="bg-[#ec4141] pl-1 pr-3" @click="handleAddPlayList">
      <template #icon>
        <div class="i-carbon-add" />
      </template>
    </NButton>
  </n-button-group>

  <NButton round class="ml-3 hover:bg-[#da3c3c]" :theme-overrides="buttonThemeOverrides" disabled>
    <template #icon>
      <div class="i-carbon-download" />
    </template>
    下载全部
  </NButton>

  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="替换播放列表"
    content="'播放全部'将会替换当前的播放列表,是否继续?"
    positive-text="继续"
    negative-text="取消"
    class="modal"
    :show-icon="false"
    :positive-button-props="{ textColor: '#333639' }"
    @positive-click="submitCallback"
  />
</template>

<style lang="css">

</style>
