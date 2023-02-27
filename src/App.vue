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
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>
