import type { PlayListInfo } from '~/types/playlist'

// 1. 获取歌单详情
export async function fetchPlayListInfo(id: number) {
  const { data, execute } = usePost<PlayListInfo>(`playlist/detail?id=${id}`)
  await execute()
  return data.value
}
