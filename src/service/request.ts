import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import showCodeMessage from "./code";
import { formatJsonToUrlParams, type instanceObject } from "@/utils/format";
import { Notify } from "vant";

interface RequestArrayType {
  [key: string]: string;
}

interface RetryRequest {
  code: number;
  [key: string]: RequestArrayType[] | number;
}

const BASE_PREFIX = "https://netease-cloud-music-d9t45hc1f-hqchqc.vercel.app/";

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    Notify({ type: "warning", message: JSON.stringify(response.status) });
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      Notify({ type: "danger", message: showCodeMessage(response.status) });
      return Promise.reject(response.data);
    }
    Notify({ type: "warning", message: "网络连接异常,请稍后再试!" });
    return Promise.reject(error);
  }
);
const service = {
  get: <T = RetryRequest>(url: string, data?: object): Promise<T> =>
    axiosInstance.get(url, { params: data }),
  // get<T = any>(url: string, data?: any): Promise<T> {
  //   return axiosInstance.get(url, data);
  // },
  post: (url: string, data?: object) => axiosInstance.post(url, data),
  put: (url: string, data?: object) => axiosInstance.put(url, data),
  delete: (url: string, data?: object) => axiosInstance.delete(url, data),
  upload: (url: string, file: File) =>
    axiosInstance.post(url, file, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  download: (url: string, data: instanceObject) => {
    const downloadUrl = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
    window.location.href = downloadUrl;
  },
};

export default service;
