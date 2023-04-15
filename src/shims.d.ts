declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// TODO: https://github.com/vuejs/pinia/issues/2098
declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  export function acceptHMRUpdate(initialUseStore: StoreDefinition | any, hot: any): (newModule: any) => any
  export function defineStore<Id, S, G, A>(id, options): StoreDefinition<Id, S, G, A>
  export function storeToRefs<SS>(store): ToRefs<StoreState<SS> & StoreGetters<SS> & PiniaCustomStateProperties<StoreState<SS>>>
  export const createPinia: Pinia
}