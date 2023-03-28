<script setup lang="ts">
import { tabThemeOverrides } from '~/config/spotting'
import { columns } from '~/config/playlistConfig'
import type { SongsListData } from '~/types/search'
import type { PlayList } from '~/types/playlist'

const { tableData, detail, loading } = defineProps<{
  tableData: SongsListData
  detail: PlayList
  loading: boolean
}>()

const commentTab = computed(() => `评论(${detail.commentCount})`)
</script>

<template>
  <div class="mt-7 ml-2">
    <n-tabs animated :theme-overrides="tabThemeOverrides">
      <n-tab-pane name="oasis" tab="歌曲列表">
        <SearchTable :table-data="tableData" :columns="columns" :loading="loading" />
      </n-tab-pane>
      <n-tab-pane name="the beatles" :tab="commentTab" disabled>
        Hey Jude
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
