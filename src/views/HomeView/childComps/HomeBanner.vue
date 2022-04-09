<script setup lang="ts">
import loginApi from "@/service/modules/loginApi";
import { isArray } from "@vue/shared";
import { onBeforeMount, ref } from "vue";
const { postVerification } = loginApi;
let banner = ref<string[]>([]);

onBeforeMount(async () => {
  const msg = await postVerification();
  console.log(msg.banners);
  if (msg?.code === 200) {
    banner.value = isArray(msg?.banners)
      ? msg?.banners?.map((item) => item?.pic)
      : [];
  }
});
</script>

<template>
  <div class="p-6">
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="item in banner"
        :key="item"
        class="rounded-2xl overflow-hidden"
      >
        <img :src="item" class="h-44" />
      </van-swipe-item>

      <template #indicator="{ active, total }">
        <div class="flex justify-center mt-4">
          <i
            class="van-swipe__indicator !mr-3"
            v-for="(item, index) in total"
            :key="item"
            :class="index === active && 'van-swipe__indicator--active'"
          ></i>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
