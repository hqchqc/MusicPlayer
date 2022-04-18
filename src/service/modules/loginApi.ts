import service from "../request";

const loginApi = {
  // 获取验证码
  getLoginCaptcha: (phone: string) =>
    service.get(`/captcha/sent?phone=${phone}`),

  // 通过验证码登录
  loginInByCaptcha: (phone: string, captcha: string) => {
    return service.get(`/login/cellphone?phone=${phone}&captcha=${captcha}`);
  },

  // 获取生成二维码的key
  getQrCodeKey: () => {
    return service.get(`/login/qr/key`);
  },

  // 获取生成二维码
  getQrCode: (key: string) => {
    return service.get(`/login/qr/create?key=${key}&qrimg=true`);
  },

  // 二维码状态轮询
  getQrCodeStatus: (key: string) => {
    return service.get(`/login/qr/check?key=${key}`);
  },
};

export default loginApi;
