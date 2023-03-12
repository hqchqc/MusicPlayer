<script setup lang="ts">
import { NButton, NEllipsis, NProgress } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { fetchSearchKeyWord } from '~/network/header'
import TheTableAction from '~/components/TheTableAction.vue'
defineOptions({
  name: 'SearchPage',
})
const router = useRouter()
const totalCount = ref(0)
const { keyword = '' } = router.currentRoute.value.query

interface Song {
  no?: number
  title: string
  singer: string
  duration: number
  pop: number
}

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

const data = ref<Song[]>([])

const pagination = reactive({
  // 受控模式下的当前页
  page: 1,
  // 总页数
  pageCount: 0,
  // 每页条数
  pageSize: 100,
  // 总条数
  itemCount: 0,
})

const handlePageChange = (currentPage: number) => {
  // console.log('currentPage', currentPage)
  // if (!loadingRef.value) {
  //   loadingRef.value = true
  //   query(
  //     currentPage,
  //     paginationReactive.pageSize,
  //     column1Reactive.sortOrder,
  //     column2Reactive.filterOptionValues,
  //   ).then((data) => {
  //     dataRef.value = data.data
  //     paginationReactive.page = currentPage
  //     paginationReactive.pageCount = data.pageCount
  //     paginationReactive.itemCount = data.total
  //     loadingRef.value = false
  //   })
  // }
}

onMounted(async () => {
  const searchList = await fetchSearchKeyWord(keyword as string, pagination.pageSize, pagination.page - 1)
  const songList = searchList?.result.songs.map(item => ({
    title: item.name,
    singer: item.ar?.[0]?.name,
    albumInfo: item.al,
    duration: item.dt,
    pop: item.pop,
  }))
  data.value = songList as Song[]
  totalCount.value = searchList?.result.songCount || 0
  pagination.itemCount = searchList?.result.songCount || 0
  pagination.pageCount = Math.ceil((searchList?.result.songCount || 0) / pagination.pageSize)
})
</script>

<template>
  <div class="pt-5 px-8">
    <h1 class="text-lg font-bold">
      搜索 {{ keyword }}
    </h1>

    <div class="mt-5">
      <n-tabs animated>
        <n-tab-pane name="oasis" tab="单曲">
          <div class="mt-1">
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

            <NButton round class="ml-3">
              <template #icon>
                <div class="i-carbon-download" />
              </template>
              下载全部
            </NButton>

            <n-data-table
              :columns="columns"
              :data="data"
              :pagination="pagination"
              :single-column="true"
              :bordered="false"
              :bottom-bordered="false"
              striped
              remote
              class="mt-3 text-xs"
              @update:page="handlePageChange"
            />
          </div>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="歌手">
          歌手
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="视频">
          视频
        </n-tab-pane>

        <template #suffix>
          <div class="color-[#999999] text-xs">
            找到 {{ totalCount }} 首单曲
          </div>
        </template>
      </n-tabs>
    </div>
  </div>
</template>
