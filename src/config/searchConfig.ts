import { NEllipsis, NProgress } from 'naive-ui'
import type { ButtonProps, DataTableColumns } from 'naive-ui'
import TheTableAction from '~/components/TheTableAction.vue'
import type { SongListInfo } from '~/types/search'
type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>

export const columns: DataTableColumns<SongListInfo> = [
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

export const pagination = reactive({
  // 总页数
  pageCount: 0,
  // 每页条数
  pageSize: 100,
  // 总条数
  itemCount: 0,
})

export const buttonThemeOverrides: ButtonThemeOverrides = {
  textColorHover: '#303030',
  textColorTextPressed: '#303030',
  textColorPressed: '#303030',
  textColorFocus: '#303030',
  borderPressed: '#d9d9d9',
  borderFocus: '#d9d9d9',
  borderHover: '#d9d9d9',
  rippleColor: '#f2f2f2',
}
