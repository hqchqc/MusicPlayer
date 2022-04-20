<script setup lang="ts">
import { RouterView } from "vue-router";
import TheTabBar from "./components/content/TheTabBar/TheTabBar.vue";
import TheScroll from "./components/common/TheScroll/TheScroll.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const themeVars = {
  tabbarHeight: "4.9375rem",
  swipeIndicatorSize: "0.5rem",
  buttonDefaultBorderColor: "#e8e8e8",
};

const route = useRoute();
const isShowTabBar = ref(false);

watch(
  () => route.meta,
  async (meta) => {
    isShowTabBar.value = meta.isShowTabBar;
  }
);
</script>

<template>
  <main
    class="absolute top-0 bottom-0 right-0 left-0 m-auto w-375 h-812 shadow-[0_0_50px_0_rgba(30,0,60,0.3)] bg-white rounded-lg"
  >
    <van-config-provider :theme-vars="themeVars">
      <the-scroll
        :class="
          isShowTabBar
            ? 'h-[calc(50.75rem-4.9375rem)] overflow-hidden'
            : 'h-812'
        "
      >
        <router-view />
      </the-scroll>
      <the-tab-bar v-show="isShowTabBar" />
    </van-config-provider>
  </main>
</template>

<style>
@import "@/assets/css/base.css";
:root {
  --van-primary-color: #fb233b;
  --van-border-color: #fbc9ce;
  --van-padding-sm: 0.75rem;
  --van-tabbar-item-active-background-color: none;
}
.van-button {
  --van-button-border-radius: 12px;
}
.van-nav-bar .van-icon {
  color: #121212 !important;
}
.van-notify {
  width: 23.4375rem !important;
  margin: auto;
  position: relative !important;
  top: calc((100vh - 812px) / 2) !important;
}
</style>
