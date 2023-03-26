export interface BannerType {
  imageUrl: string
  typeTitle: string
}

export interface CarouselType {
  banners: BannerType[]
  code: number
}

export interface ListType {
  alg: string
  id: number
  name: string
  picUrl: string
  playCount: number
}

export interface RecommendList {
  result: ListType[]
  code: number
}