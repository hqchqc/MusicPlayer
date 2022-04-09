<script setup lang="ts">
import { RouterView } from "vue-router";
import TheTabBar from "./components/content/TheTabBar/TheTabBar.vue";

const themeVars = {
  tabbarHeight: "79px",
  swipeIndicatorSize: "8px",
};
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
    <the-tab-bar />
  </van-config-provider>
</template>

<style>
@import "@/assets/css/base.css";
:root {
  --van-primary-color: #fb233b;
  --van-border-color: #fbc9ce;
  --van-padding-sm: 12px;
}
</style>
