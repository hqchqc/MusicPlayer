<script setup lang="ts">

</script>

<template>
  <main class="text-gray-700 dark:text-gray-200">
    <TheBackground>
      <RouterView />
      <div class="flex items-center justify-center h-full">
        <div class="w-5xl h-2xl border">
          <TheHeader />
        </div>
      </div>
    </TheBackground>
  </main>
</template>
