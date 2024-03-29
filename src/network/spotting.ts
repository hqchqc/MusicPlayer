import type { CarouselType, RecommendList } from '~/types/spotting'

// 1. 获取轮播图
export async function fetchCarousel(type = 0) {
  const { data, execute } = usePost<CarouselType>(`banner?type=${type}`)
  await execute()
  return data.value
}

// 2. 推荐歌单
export async function fetchPlaylist(limit = 30) {
  const { data, execute } = usePost<RecommendList>(`personalized?limit=${limit}`)
  await execute()
  return data.value
}
