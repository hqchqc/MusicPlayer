<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isShow = ref(true);
let timeout: number;

onBeforeMount(() => {
  timeout = setTimeout(() => {
    router.push("/home");
    isShow.value = false;
  }, 2000);
});

onBeforeUnmount(() => {
  clearTimeout(timeout);
});
</script>

<template>
  <div class="h-screen" v-if="isShow">
    <div class="bg-launch-screen relative h-screen">
      <div class="absolute left-1/2 bottom-1/3">
        <span class="relative text-3xl font-black -left-1/2">beanBag</span>
      </div>
      <div class="absolute left-1/2 bottom-20">
        <span class="relative -left-1/2 text-xs">Version: 1.0.0</span>
      </div>
    </div>
  </div>
</template>
