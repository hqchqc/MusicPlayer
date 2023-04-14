import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
  Input: {
    border: 'none',
    borderHover: 'none',
    borderFocus: 'none',
    boxShadowFocus: 'none',
    caretColor: 'white',
    colorFocus: '#e33e3e',
    placeholderColor: '#f19f9f',
    textColor: 'white',
  },
  Popover: {
    space: '20px',
    padding: '0',
  },
  Tabs: {
    barColor: '#ec4141',
    tabTextColorActiveBar: 'black',
    tabTextColorHoverBar: 'black',
    tabFontWeightActive: '900',
  },
  Spin: {
    color: '#ec4141',
  },
  DataTable: {
    thColor: 'white',
    thPaddingMedium: '0 0 4px 8px',
    thTextColor: '#888888',
    tdColorHover: '#f2f2f3',
    tdColorStriped: '#fafafa',
    tdPaddingMedium: '8px',
    tdTextColor: '#646464',
    loadingColor: '#ec4141',
  },
  Pagination: {
    itemTextColor: '#666666',
    itemTextColorActive: 'white',
    itemColorActive: '#ec4141',
    itemBorderActive: 'none',
    itemColorHover: '#f5f5f5',
    itemTextColorHover: '#313131',
    itemBorderHover: 'none',
    itemColorActiveHover: '#ec4141',
    itemTextColorPressed: '#666666',
    itemBorder: '#dcdcdc',
  },
  Drawer: {
    headerPadding: '12px 24px 6px 28px',
  },
  Carousel: {
    dotColorActive: '#ec4141',
    dotColor: '#e5e5e5',
  },
}
