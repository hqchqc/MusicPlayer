import type { DataTableColumns } from 'naive-ui'
import type { SongListInfo } from '~/types/search'
import SearchTableTitle from '~/components/search/SearchTableTitle.vue'

export const columns: DataTableColumns<SongListInfo> = [
  {
    title: '',
    key: 'no',
  },
  {
    title: () => null,
    key: 'title',
    width: 50,
    render(row) {
      return h (
        SearchTableTitle, { title: row.title, isNeedVip: row.isNeedVip },
      )
    },
  },
  {
    title: () => null,
    key: 'singer',
  },
  {
    title: () => null,
    key: 'duration',
    render(row) {
      return h(
        'h1', null, useDateFormat(row.duration, 'mm:ss').value,
      )
    },
  },
]
