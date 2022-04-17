import service from "../request";

const loginApi = {
  // 验证登录实例
  postVerification: () => service.get(`/banner?type=1`),
  // ss
  test: () => service.get(`/personalized/newsong`),

  // 登录
  getLoginCaptcha: (phone: string) =>
    service.get(`/captcha/sent?phone=${phone}`),

  loginIn: (phone: string, captcha: string) => {
    service.get(`/login/cellphone?phone=${phone}&captcha=${captcha}`);
  },
};

export default loginApi;
