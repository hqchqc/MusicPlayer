import type { TabsProps } from 'naive-ui'
type TabThemeOverrides = NonNullable<TabsProps['themeOverrides']>

export const tabThemeOverrides: TabThemeOverrides = {
  tabFontSizeMedium: '16px',
  tabFontWeightActive: 'bolder',
}
