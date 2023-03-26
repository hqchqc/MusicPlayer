import type { DataTableColumns } from 'naive-ui'
import type { SongListInfo } from '~/types/search'
import SearchTableTitle from '~/components/search/SearchTableTitle.vue'
import PlayListState from '~/components/player/PlayListState.vue'

export const columns: DataTableColumns<SongListInfo> = [
  {
    title: '',
    key: 'no',
    render(row) {
      return h(
        PlayListState, { row },
      )
    },
  },
  {
    title: () => null,
    key: 'title',
    width: 50,
    render(row) {
      return h (
        SearchTableTitle, { row },
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
