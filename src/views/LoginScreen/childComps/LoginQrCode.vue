<script setup lang="ts">
import loginApi from "@/service/modules/loginApi";
import { ref } from "vue";

const isShow = ref(false);
const imgSrc = ref("");

const { getQrCodeKey, getQrCode, getQrCodeStatus } = loginApi;

const handleQrCode = async () => {
  isShow.value = true;
  const msg = await getQrCodeKey();
  if (msg.code === 200) {
    const qrCodeMsg = await getQrCode(msg.data.unikey);
    if (qrCodeMsg.code === 200) {
      imgSrc.value = qrCodeMsg.data.qrimg as string;
    }
  }
};
</script>

<template>
  <van-button size="large" @click="handleQrCode">
    <icon-svg icon-class="erweima" /> 二维码登录
  </van-button>
  <van-popup v-model:show="isShow">
    <img :src="imgSrc" />
  </van-popup>
</template>
