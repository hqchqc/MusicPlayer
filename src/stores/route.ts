import { acceptHMRUpdate, defineStore } from 'pinia'

export const useRouteStore = defineStore('route', () => {
  const isForwardSkip = ref(false)
  const isBackSkip = ref(false)

  function setForwardSkip() {
    if (window.history.state.forward)
      isForwardSkip.value = true

    else
      isForwardSkip.value = false
  }

  function setBackSkip() {
    if (window.history.state.back)
      isBackSkip.value = true

    else
      isBackSkip.value = false
  }

  return {
    isForwardSkip,
    isBackSkip,
    setForwardSkip,
    setBackSkip,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useRouteStore, import.meta.hot))
