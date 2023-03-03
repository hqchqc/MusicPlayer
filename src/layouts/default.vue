<script setup lang="ts">
// const fetchSearch = async () => {
//   const { execute } = usePost('/search/default')
//   await execute()
// }

// onMounted(() => fetchSearch())
</script>

<template>
  <main class="text-gray-700 dark:text-gray-200">
    <TheBackground>
      <div class="flex items-center justify-center h-full">
        <div class="w-5xl h-2xl border">
          <TheHeader />

          <div class="flex h-full">
            <TheNav />
            <RouterView />
          </div>
        </div>
      </div>
    </TheBackground>
  </main>
</template>
