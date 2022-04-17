<script setup lang="ts">
import { ref } from "vue";
import IconSvg from "../../../components/common/IconSvg/IconSvg.vue";
import loginApi from "@/service/modules/loginApi";
const { getLoginCaptcha, loginIn } = loginApi;
const tel = ref("");
const sms = ref("");
const handleBack = () => {
  history.back();
};
const handleSubmit = async () => {
  console.log("submit", tel, sms);
  const msg = await loginIn(tel.value, sms.value);
  console.log(msg, "login");
};

const handleCaptcha = async () => {
  const msg = await getLoginCaptcha(tel.value);
  console.log(msg, "code");
};
</script>

<template>
  <div class="bg-login-mode relative h-812">
    <van-nav-bar title="手机号登录" left-arrow @click-left="handleBack" />
    <div class="absolute top-80 w-72 ml-11 text-center">
      <span class="relative text-2xl font-bold">登录</span>
    </div>

    <div class="relative top-[361px] ml-6 mr-6">
      <van-form @submit="handleSubmit" autocomplete="off">
        <van-field
          v-model="tel"
          type="tel"
          placeholder="请输入手机号"
          :rules="[
            {
              pattern:
                /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/,
              message: '请输入正确的手机号',
            },
          ]"
        >
          <template #left-icon><icon-svg icon-class="shouji--" /></template>
        </van-field>

        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
        >
          <template #left-icon><icon-svg icon-class="yanzhengma" /></template>
          <template #button>
            <van-button size="small" type="primary" @click="handleCaptcha"
              >发送验证码</van-button
            >
          </template>
        </van-field>

        <div class="mt-4">
          <van-button size="large" type="primary" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<style scoped>
.van-hairline--bottom:after {
  border: none;
}
</style>
