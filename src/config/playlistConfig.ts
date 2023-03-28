import type { DataTableColumns } from 'naive-ui'
import type { SongListInfo } from '~/types/search'
import SearchTableTitle from '~/components/search/SearchTableTitle.vue'
import SearchTableAction from '~/components/search/SearchTableAction.vue'

export const columns: DataTableColumns<SongListInfo> = [
  {
    title: '',
    key: 'no',
    width: '12%',
    render(row, index) {
      return h(
        SearchTableAction, { row, index: index + 1 },
      )
    },
  },
  {
    title: '标题',
    key: 'title',
    width: '35%',
    render(row) {
      return h (
        SearchTableTitle, { row },
      )
    },
  },
  {
    title: '歌手',
    key: 'singer',
  },
  {
    title: '时间',
    key: 'duration',
    render(row) {
      return h(
        'h1', null, useDateFormat(row.duration, 'mm:ss').value,
      )
    },
  },
]
