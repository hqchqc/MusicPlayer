<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'MusicPlayer',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#00aba9' : '#ffffff')),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
      ),
    },
  ],
})

const themeOverrides: GlobalThemeOverrides = {
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
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <RouterView />
    <n-message-provider>
      <TheMessage />
    </n-message-provider>
  </n-config-provider>
</template>
