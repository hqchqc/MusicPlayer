import { acceptHMRUpdate, defineStore } from 'pinia'

interface UserInfo {
  avatarUrl: string
  nickname: string
  userId: number
}

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const userInfo = reactive<UserInfo>({
    avatarUrl: '',
    nickname: '',
    userId: 0,
  })

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setUserInfo(setInfo: UserInfo) {
    const { avatarUrl, nickname, userId } = setInfo
    userInfo.avatarUrl = avatarUrl
    userInfo.nickname = nickname
    userInfo.userId = userId
  }

  return {
    userInfo,
    setUserInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
