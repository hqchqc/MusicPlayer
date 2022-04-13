<script setup lang="ts">
import { RouterView } from "vue-router";
import TheTabBar from "./components/content/TheTabBar/TheTabBar.vue";
import TheScroll from "./components/common/TheScroll.vue";

const themeVars = {
  tabbarHeight: "4.9375rem",
  swipeIndicatorSize: "0.5rem",
};
</script>

<template>
  <main
    class="absolute top-0 bottom-0 right-0 left-0 m-auto w-375 h-812 shadow-[0_0_50px_0_rgba(30,0,60,0.3)] bg-white rounded-lg"
  >
    <van-config-provider :theme-vars="themeVars">
      <the-scroll class="h-[calc(50.75rem-4.9375rem)] overflow-hidden">
        <router-view />
      </the-scroll>
      <the-tab-bar />
    </van-config-provider>
  </main>
</template>

<style>
@import "@/assets/css/base.css";
:root {
  --van-primary-color: #fb233b;
  --van-border-color: #fbc9ce;
  --van-padding-sm: 12px;
  --van-tabbar-item-active-background-color: none;
}
</style>
