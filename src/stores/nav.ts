import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  /**
   * Current nav of the NAV_LIST.
   */
  const savedNavIndex = ref(0)

  /**
   * Changes the current navIndex of the NAV_LIST and saves the one that was used
   * before.
   *
   * @param index - new index to set
   */
  function setNavIndex(index: number) {
    savedNavIndex.value = index
  }

  return {
    setNavIndex,
    savedNavIndex,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot))
