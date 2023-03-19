<script setup lang="ts">
const showOuter = ref(false)

const player = usePlayerStore()
const audio = ref<HTMLAudioElement>()

const handlePlayList = () => {
  showOuter.value = !showOuter.value
}

watch(player, () => {
  if (audio.value) {
    audio.value.src = player.currentPlayUrl
    audio?.value?.play()
  }
})
</script>

<template>
  <div class="flex justify-between items-center h-full text-center">
    <!-- left -->
    <div class="flex-1">
      123
    </div>

    <!-- center -->
    <div class="flex flex-col flex-[2] h-full justify-around items-center py-2">
      <div class="flex justify-around w-66 items-center">
        <div i-carbon:redo class="player-icon" />
        <div i-carbon-skip-back-filled class="player-icon" />
        <div v-if="player.playState === 'playing'" i-carbon-pause-filled class="w-[2.5em] h-[2.5em] cursor-pointer" />
        <div v-else i-carbon-play-filled class="w-[2.5em] h-[2.5em] color-[#adadad]" />
        <div i-carbon-skip-forward-filled class="player-icon" />
        <div i-carbon-label class="player-icon" />
      </div>
      <div class="w-88">
        <n-progress type="line" :percentage="100" :height="3" :show-indicator="false" color="#e5e5e5" />
      </div>
    </div>

    <!-- right -->
    <div class="flex-1 flex px-6 justify-end">
      <div i-carbon-list class="cursor-pointer" @click="handlePlayList" />
    </div>
  </div>

  <n-drawer
    v-model:show="showOuter" to="#mainBox" :trap-focus="false"
    :block-scroll="false"
    show-mask="transparent"
  >
    <n-drawer-content title="当前播放">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>

  <audio ref="audio" />
</template>
