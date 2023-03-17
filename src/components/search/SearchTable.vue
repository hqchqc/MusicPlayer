<script setup lang="ts">
import { NEllipsis, NProgress } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { fetchSearchKeyWord } from '~/network/header'
import TheTableAction from '~/components/TheTableAction.vue'
interface Song {
  no?: number
  title: string
  singer: string
  duration: number
  pop: number
}

const { keyword = '' } = defineModel<{
  keyword: string
  tableData: any
}>()

const columns: DataTableColumns<Song> = [
  {
    title: '',
    key: 'no',
    width: '12%',
    render(_, index) {
      return h (
        TheTableAction, { index: index + 1 },
      )
    },
  },
  {
    title: '音乐标题',
    key: 'title',
    width: '35%',
    render(row) {
      return h (
        NEllipsis, { style: 'max-width: 200px' }, { default: () => row.title },
      )
    },
  },
  {
    title: '歌手',
    key: 'singer',
  },
  {
    title: '专辑',
    key: ['albumInfo', 'name'] as unknown as string,
    render(row) {
      return h (
        NEllipsis, { style: 'max-width: 100px' }, { default: () => row.title },
      )
    },
  },
  {
    title: '时长',
    key: 'duration',
    render(row) {
      return h(
        'h1', null, useDateFormat(row.duration, 'mm:ss').value,
      )
    },
  },
  {
    title: '热度',
    key: 'pop',
    width: '13%',
    render(row) {
      return h(
        NProgress, {
          type: 'line',
          percentage: row.pop,
          showIndicator: false,
          railColor: '#e5e5e5',
          color: '#cecece',
          height: 5,
        },
      )
    },
  },
]

const tableLoading = ref(true)

const pagination = reactive({
  // 总页数
  pageCount: 0,
  // 每页条数
  pageSize: 100,
  // 总条数
  itemCount: 0,
})

const data = ref<Song[]>([])

const totalCount = ref(0)

const handlePageChange = async (currentPage: number) => {
  if (!tableLoading.value) {
    tableLoading.value = true
    const msg = await fetchSearchKeyWord(keyword as string, pagination.pageSize, pagination.pageSize * (currentPage - 1))

    const songList = msg?.result.songs.map(item => ({
      title: item.name,
      singer: item.ar?.[0]?.name,
      albumInfo: item.al,
      duration: item.dt,
      pop: item.pop,
    }))
    data.value = songList as Song[]
    totalCount.value = msg?.result.songCount || 0
    pagination.itemCount = msg?.result.songCount || 0
    tableLoading.value = false
  }
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :loading="tableLoading"
    :data="data"
    :pagination="pagination"
    :single-column="true"
    :bordered="false"
    :bottom-bordered="false"
    striped
    remote
    class="mt-5 text-xs song-table"
    @update:page="handlePageChange"
  />
</template>

<style scoped>
.song-table::v-deep(.n-data-table__pagination) {
  justify-content: center;
}
.song-table::v-deep(.n-data-table__pagination) {
  margin: 12px 0 12px 0;
}
</style>
