<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { columns } from '~/config/playerConfig'

const player = usePlayerStore()
const { currentPlayInfo, playState, playlist } = storeToRefs(player)

const showOuter = ref(false)
const audio = ref<HTMLAudioElement>()
const currentTime = ref('00:00')
const playProgress = ref(0)

const iconBtnStyle = computed(() => playState.value === 'disabled' ? 'player-disabled-icon' : 'player-played-icon')
const pauseIconStyle = computed(() => player.playState === 'disabled' ? 'color-[#adadad]' : 'color-[313131]')
const totalTime = computed(() => useDateFormat(currentPlayInfo.value.duration, 'mm:ss').value)
const isShowPlayIcon = computed(() => playState.value === 'playing')
const isShowDisabledState = computed(() => player.playState !== 'disabled')

const handlePlayList = () => showOuter.value = !showOuter.value

const handleTimeUpdate = () => {
  const duration = player.currentPlayInfo.duration
  const audioTime = audio.value?.currentTime ?? 0
  currentTime.value = useDateFormat(audioTime * 1000, 'mm:ss').value
  playProgress.value = Number((audioTime * 1000 / duration * 100).toFixed(2))

  if (audio.value?.duration === audioTime)
    player.playSing('after')
}

onMounted(() => {
  if (audio.value)
    player.setAudioInstance(audio.value)
})
</script>

<template>
  <div class="flex justify-between items-center h-full text-center">
    <!-- left -->
    <div v-show="playState !== 'disabled'" class="flex-1 flex px-3">
      <div class="flex">
        <n-image
          lazy
          class=" rounded-1"
          width="48"
          height="48"
          :src="currentPlayInfo.albumInfo.picUrl"
        />
      </div>
      <div class="ml-3 flex flex-col items-start">
        <div class="text-base">
          {{ currentPlayInfo.title }}
        </div>
        <div class="text-sm">
          {{ currentPlayInfo.singer }}
        </div>
      </div>
    </div>

    <!-- center -->
    <div class="flex flex-col flex-[2] h-full justify-around items-center py-2">
      <div class="flex justify-around w-66 items-center">
        <div
          i-carbon:redo
          :class="iconBtnStyle"
        />
        <div
          i-carbon-skip-back-filled
          :class="iconBtnStyle"
          @click="player.playSing('before')"
        />
        <div
          v-if="isShowPlayIcon"
          i-carbon-pause-filled
          class="w-[2.5em] h-[2.5em] cursor-pointer"
          @click="player.setPlayState('pause')"
        />
        <div
          v-else
          i-carbon-play-filled
          class="w-[2.5em] h-[2.5em] cursor-pointer"
          :class="pauseIconStyle"
          @click="player.setPlayState('playing')"
        />
        <div
          i-carbon-skip-forward-filled
          :class="iconBtnStyle"
          @click="player.playSing('after')"
        />
        <div
          i-carbon-label
          :class="iconBtnStyle"
        />
      </div>
      <div class="flex items-center ">
        <div v-show="isShowDisabledState" class="text-xs">
          {{ currentTime }}
        </div>
        <div class="w-88 mx-2">
          <n-progress
            processing
            type="line"
            color="#ff3434"
            :percentage="playProgress"
            :height="3"
            :show-indicator="false"
          />
        </div>
        <div v-show="isShowDisabledState" class="text-xs">
          {{ totalTime }}
        </div>
      </div>
    </div>

    <!-- right -->
    <div v-show="isShowDisabledState" class="flex-1 flex px-6 justify-end">
      <div i-carbon-list class="cursor-pointer" @click="handlePlayList" />
    </div>
  </div>

  <n-drawer
    v-model:show="showOuter" to="#mainBox" :trap-focus="false"
    :block-scroll="false"
    show-mask="transparent"
    width="420"
    class="drawer"
  >
    <n-drawer-content>
      <template #header>
        <span class="font-bold">当前播放</span>
        <div class="mt-2 text-xs color-[#d5d5d5]">
          总95首
        </div>
      </template>

      <search-table
        :table-data="playlist"
        :columns="columns"
        :loading="false"
      />
    </n-drawer-content>
  </n-drawer>

  <audio
    ref="audio"
    :src="currentPlayInfo.url"
    autoplay="false"
    @timeupdate="handleTimeUpdate"
  />
</template>

<style scoped>
::v-deep(.n-drawer-body-content-wrapper)::-webkit-scrollbar {
  width:10px;
  height:5px;
}
::v-deep(.n-drawer-body-content-wrapper)::-webkit-scrollbar-thumb {
  height: 10px;
  background: #e0e0e0;
  border-radius:10px;
}
::v-deep(.n-drawer-body-content-wrapper)::-webkit-scrollbar-thumb:hover{
  background: #d4d4d4;
}
::v-deep(.n-drawer-body-content-wrapper)::-webkit-scrollbar-corner{
  background: #179a16;
}
::v-deep(.n-drawer-body-content-wrapper) {
  padding: 0 !important;
}
::v-deep(thead) {
  display: none;
}

.drawer .header-padding {
  padding-bottom: 0 !important;
}
</style>
