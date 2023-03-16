<script setup lang="ts">
import type { ButtonProps } from 'naive-ui'
type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>

const buttonThemeOverrides: ButtonThemeOverrides = {
  textColorHover: '#303030',
  textColorTextPressed: '#303030',
  textColorPressed: '#303030',
  textColorFocus: '#303030',
  borderPressed: '#d9d9d9',
  borderFocus: '#d9d9d9',
  borderHover: '#d9d9d9',
  rippleColor: '#f2f2f2',
}
</script>

<template>
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

  <NButton round class="ml-3 hover:bg-[#da3c3c]" :theme-overrides="buttonThemeOverrides">
    <template #icon>
      <div class="i-carbon-download" />
    </template>
    下载全部
  </NButton>
</template>

<style lang="css">

</style>
