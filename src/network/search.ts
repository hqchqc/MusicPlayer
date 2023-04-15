import type { SongInfo } from '~/types/search'

// 1. 获取音乐url
export async function fetchSongUrl(id: number) {
  const { data, execute } = usePost<SongInfo[]>(`song/url/v1?id=${id}&level=standard`)
  await execute()
  return data.value
}
