import type { LocationQueryRaw } from 'vue-router'
import { stringifyQuery } from 'vue-router'
import type { MaybeRef, UseFetchReturn } from '@vueuse/core'
import { createFetch, isObject } from '@vueuse/core'

const baseUrl = import.meta.env.VITE_BASE_URL

// config
const RequestTimeout = 10000

const useRequest = createFetch({
  baseUrl,
  options: {
    immediate: false,
    timeout: RequestTimeout,
    beforeFetch({ options }) {
      // const state = useGlobalState()

      // if (RequestAuthKey && state.value.token) {
      //   options.headers = Object.assign(options.headers || {}, {
      //     [RequestAuthKey]: state.value.token,
      //   })
      // }

      return { options }
    },
    afterFetch({ data, response }) {
      const status = data.code

      // NOTE: 拦截返回，需要根据具体返回修改
      if (status === 200 || status === 800 || status === 801 || status === 803) {
        data = data.data || data
      }
      else if (!status) {
        data = data.data || {}
      }
      else if (status) {
        // console.log('出现未全局拦截错误')
        window.$message.error('出现未全局拦截错误')
        data = undefined
      }

      return { data, response }
    },
    onFetchError({ data, error }) {
      console.error(error)
      data = undefined
      return { data, error }
    },
  },
  fetchOptions: {
    credentials: 'include',
  },
})

/**
 * 封装 get 请求
 * @param url 请求地址
 * @param query 请求参数
 */
export function useGet<T = unknown>(
  url: MaybeRef<string>,
  query?: MaybeRef<unknown>,
): UseFetchReturn<T> {
  const _url = computed(() => {
    const _url = unref(url)
    const _query = unref(query)
    const queryString = isObject(_query)
      // eslint-disable-next-line no-mixed-operators
      ? stringifyQuery(_query as LocationQueryRaw)
      // eslint-disable-next-line no-mixed-operators
      : _query || ''
    return `${_url}${queryString ? '?' : ''}${queryString}`
  })

  return useRequest<T>(_url).json()
}

/**
 * 封装 post 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePost<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>,
): UseFetchReturn<T> {
  return useRequest<T>(url).post(payload).json()
}

/**
 * 封装 put 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePut<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>,
): UseFetchReturn<T> {
  return useRequest<T>(url).put(payload).json()
}

/**
 * 封装 delete 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function useDelete<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>,
): UseFetchReturn<T> {
  return useRequest<T>(url).delete(payload).json()
}

/**
 * 封装获取Blob进行下载
 * @param url 请求地址
 */
export function useBlob(url: MaybeRef<string>): UseFetchReturn<Blob> {
  return useRequest(url).blob()
}
