import service from "../request";

const homeApi = {
  // 获取轮播图
  postVerification: () => service.get(`/banner?type=1`),
  test: () => service.get(`/personalized/newsong`),
};

export default homeApi;
