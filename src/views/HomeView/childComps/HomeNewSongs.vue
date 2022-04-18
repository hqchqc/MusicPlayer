<script setup lang="ts">
import { onMounted, ref } from "vue";
import { isArray } from "@vue/shared";
import TheScroll from "../../../components/common/TheScroll/TheScroll.vue";
import homeApi from "@/service/modules/homeApi";
const { test } = homeApi;
let picUrl = ref<string[]>([]);

onMounted(async () => {
  const msg = await test();
  if (msg?.code === 200) {
    picUrl.value = isArray(msg?.result)
      ? msg?.result?.map((item) => item?.picUrl)
      : [];
  }
});
</script>

<template>
  <div class="p-6 pt-1 flex justify-between items-center font-semibold">
    <div class="text-lg leading-6">
      <span>New Songs</span>
    </div>
    <div class="text-sm leading-5 text-[#FB233B]">
      <span>View all</span>
    </div>
  </div>
  <div class="pl-6">
    <the-scroll scrollX>
      <div
        class="w-36 overflow-hidden inline-block mr-4 whitespace-normal"
        v-for="(item, index) in picUrl"
        :key="index"
      >
        <img :src="item" class="w-36 h-36 rounded-2xl" />
        <div class="text-base font-semibold">
          <span>All To Well (10 Minute Version)</span>
        </div>
        <div class="text-sm text-[#A5A5A5]">
          <span>Taylor Swift</span>
        </div>
      </div>
    </the-scroll>
  </div>
</template>
