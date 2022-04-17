<script setup lang="ts">
import IconSvg from "../../components/common/IconSvg/IconSvg.vue";
</script>

<template>
  <div class="bg-login-mode relative h-812">
    <div class="absolute top-80 w-72 ml-11 text-center">
      <span class="relative text-2xl font-bold"
        >Find the best music from around the world</span
      >
    </div>
    <div class="relative top-1/2 ml-6 mr-6">
      <div>
        <van-button size="large" to="/login/phone">
          <icon-svg icon-class="shouji--" /> 手机号登录
        </van-button>
      </div>
      <div class="mt-4 mb-2">
        <van-button size="large">
          <icon-svg icon-class="erweima" /> 二维码登录
        </van-button>
      </div>

      <van-divider>or</van-divider>

      <div>
        <van-button size="large" type="primary">注册</van-button>
      </div>

      <div class="mt-4">
        <van-button size="large">登录</van-button>
      </div>
    </div>
  </div>
</template>
