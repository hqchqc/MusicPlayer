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
      <RouterView />
      <div class="flex items-center justify-center h-full">
        <div class="w-5xl h-2xl border">
          <TheHeader />

          <nav class="w-50 h-[calc(100%-3.75rem)] border border-b-none">
            <ul class="px-2 pl-3 space-y-2 text-[0.9rem] mt-3">
              <li class="cursor-pointer font-black text-base bg-[#f6f6f7]  py-2 pl-3">
                发现音乐
              </li>
              <li>播客</li>
              <li>视频</li>
              <li>关注</li>
              <li>直播</li>
              <li>私人FM</li>
            </ul>
            <!-- <a>发现音乐</a> -->
          </nav>
        </div>
      </div>
    </TheBackground>
  </main>
</template>
