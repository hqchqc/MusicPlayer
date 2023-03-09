<script setup lang="ts">
import { NAV_LIST } from './config'
const searchPlaceholder = ref('')

const fetchSearch = async () => {
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

          <div class="flex h-full">
            <TheNav :nav-list="NAV_LIST" />
            <RouterView />
          </div>
        </div>
      </div>
    </TheBackground>
  </main>
</template>
