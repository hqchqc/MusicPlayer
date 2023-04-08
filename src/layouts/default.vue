<script setup lang="ts">
import { NAV_LIST } from '~/config/navConfig'

const searchPlaceholder = ref('')

async function fetchSearch() {
  const { data, execute } = usePost<{ realkeyword: string }>('search/default')
  await execute()
  searchPlaceholder.value = data.value?.realkeyword || ''
}

onMounted(() => {
  fetchSearch()
})
</script>

<template>
  <main class="text-gray-700 dark:text-gray-200">
    <TheBackground>
      <div class="flex items-center justify-center h-full">
        <div class="w-5xl h-2xl border">
          <TheHeader :search-placeholder="searchPlaceholder" />

          <div id="mainBox" class="relative overflow-x-hidden flex h-[calc(42rem-4.5rem-3.75rem)]">
            <TheNav :nav-list="NAV_LIST" />
            <RouterView class="w-[calc(100%-12.5rem)] bg-white h-full overflow-y-auto scrollbar" />
          </div>

          <div class="h-18 border-y bg-white">
            <Player />
          </div>
        </div>
      </div>
    </TheBackground>
  </main>
</template>

<style lang="css" scoped>
.scrollbar::-webkit-scrollbar{
  width:10px;
  height:5px;
}
.scrollbar::-webkit-scrollbar-thumb{
  height: 10px;
  background: #e0e0e0;
  border-radius:10px;
}
.scrollbar::-webkit-scrollbar-thumb:hover{
  background: #d4d4d4;
}
.scrollbar::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>
