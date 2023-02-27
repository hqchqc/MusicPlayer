<script setup lang="ts">
const fetchSearch = async () => {
  const { execute } = usePost('/search/default')
  await execute()
}

onMounted(() => fetchSearch())
</script>

<template>
  <main class="text-gray-700 dark:text-gray-200">
    <TheBackground>
      <RouterView />
      <div class="flex items-center justify-center h-full">
        <div class="w-5xl h-2xl border">
          <TheHeader />

          <nav class="w-50 h-[calc(100%-3.75rem)] border border-b-none">
            <!-- <a>发现音乐</a> -->
          </nav>
        </div>
      </div>
    </TheBackground>
  </main>
</template>
