import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
