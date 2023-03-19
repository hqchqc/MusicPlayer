<script setup lang="ts">
import type { DataTableColumns, PaginationProps } from 'naive-ui'
import type { SongListInfo, SongsListData } from '~/types/search'

const { keyword = '', tableData, columns, loading, pagination } = defineProps<{
  keyword: string
  tableData: SongsListData
  columns: DataTableColumns<SongListInfo>
  loading: boolean
  pagination: PaginationProps
}>()

const emit = defineEmits(['fetchList'])
const handlePageChange = async (currentPage: number) => {
  emit('fetchList', keyword, pagination.pageSize, (currentPage - 1) * (pagination.pageSize ?? 0))
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :loading="loading"
    :data="tableData.songList"
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
