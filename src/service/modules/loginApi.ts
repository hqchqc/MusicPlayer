import service from "../request";

const loginApi = {
  // 验证登录实例
  postVerification: () => service.get(`/banner?type=1`),
  // ss
  test: () => service.get(`/personalized/newsong`),
};

export default loginApi;
