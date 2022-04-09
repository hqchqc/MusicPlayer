import service from "../request";

const loginApi = {
  // 验证登录实例
  postVerification: () => service.get(`/banner?type=1`),
};

export default loginApi;
