<script lang="ts" setup>
const handleBack = () => {
  history.back();
};
</script>

<template>
  <div class="bg-login-mode relative h-812">
    <van-nav-bar title="注册" left-arrow @click-left="handleBack" />
    <div class="absolute top-80 w-72 ml-11 text-center">
      <span class="relative text-2xl font-bold">注册</span>
    </div>
  </div>
</template>
