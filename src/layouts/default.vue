<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  Input: {
    borderHover: 'none',
    borderFocus: 'none',
    border: 'none',
  },
}
</script>

<template>
  <main class="text-gray-700 dark:text-gray-200">
    <TheBackground>
      <RouterView />
      <div class="flex items-center justify-center h-full ">
        <div class="w-5xl h-2xl border ">
          <header class="h-15 bg-[#ec4141] flex items-center px-5">
            <div class="w-30">
              <img src="/logo.png">
            </div>
            <div class="ml-22">
              <div class="flex ">
                <n-button strong secondary circle class=" bg-[#da3c3c] w-6 h-6 ">
                  <template #icon>
                    <div i-carbon-chevron-left class="w-4 h-4 color-white" />
                  </template>
                </n-button>

                <n-button strong secondary circle class=" bg-[#da3c3c] w-6 h-6 ml-2">
                  <template #icon>
                    <div i-carbon-chevron-right class="w-4 h-4 color-white" />
                  </template>
                </n-button>

                <n-config-provider :theme-overrides="themeOverrides">
                  <n-input size="small" round placeholder="浪漫血液-林俊杰" class="ml-3 bg-[#e33e3e] ">
                    <template #prefix>
                      <div i-carbon-search class="color-white" />
                    </template>
                  </n-input>
                </n-config-provider>
              </div>
            </div>
          </header>
        </div>
      </div>
    </TheBackground>
  </main>
</template>
