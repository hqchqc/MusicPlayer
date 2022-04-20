<script setup lang="ts">
import { ref } from "vue";
import IconSvg from "../../../components/common/IconSvg/IconSvg.vue";
import loginApi from "@/service/modules/loginApi";
import { Notify } from "vant";
import { useRouter } from "vue-router";
const { getLoginCaptcha, loginInByCaptcha } = loginApi;
const tel = ref("");
const sms = ref("");
const isShowSendBtn = ref(true);
const router = useRouter();

const handleBack = () => {
  history.back();
};
const handleSubmit = async () => {
  const msg = await loginInByCaptcha(tel.value, sms.value);
  if (msg.code === 200) {
    Notify({ type: "success", message: "登录成功！" });
    router.push("/home");
  } else {
    Notify({ type: "danger", message: msg.message });
  }
};

const handleCaptcha = async () => {
  const msg = await getLoginCaptcha(tel.value);
  if (msg.code === 200) {
    Notify({ type: "success", message: "验证码已发送，请注意查收！" });
  } else {
    Notify({ type: "danger", message: msg.message });
  }

  isShowSendBtn.value = false;
};

// 校验函数返回 true 表示校验通过，false 表示不通过
const handleValidator = (val: string) => {
  return /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val);
};

const handleLoginValidator = () => {
  return !(handleValidator(tel.value) && sms.value);
};

const handleFinish = () => {
  isShowSendBtn.value = true;
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
              validator: handleValidator,
              message: '请输入正确的手机号',
              trigger: 'onChange',
            },
          ]"
        >
          <template #left-icon><icon-svg icon-class="shouji--" /></template>
        </van-field>

        <van-field
          v-model="sms"
          center
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写短信验证码' }]"
        >
          <template #left-icon><icon-svg icon-class="yanzhengma" /></template>
          <template #button>
            <van-button
              v-if="isShowSendBtn"
              size="small"
              type="primary"
              @click="handleCaptcha"
              :disabled="!handleValidator(tel)"
              >发送验证码</van-button
            >
            <van-count-down
              v-else
              time="5000"
              format="(ss秒)后重新发送"
              @finish="handleFinish"
            >
              <template #default="timeData">
                <span class="text-red-300">
                  ({{ timeData.seconds }}秒)后重新发送
                </span>
              </template>
            </van-count-down>
          </template>
        </van-field>

        <div class="mt-4">
          <van-button
            size="large"
            type="primary"
            native-type="submit"
            :disabled="handleLoginValidator()"
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
