<script setup lang="ts">

</script>

<template>
  <div class="flex justify-between items-center h-full text-center">
    <!-- left -->
    <div class="flex-1">
      123
    </div>

    <!-- center -->
    <div class="flex flex-col flex-[2] h-full justify-around items-center py-2">
      <div class="flex justify-around w-66 items-center">
        <div i-carbon:redo class="w-[1em] h-[1em] color-[#adadad]" />
        <div i-carbon-skip-back-filled class="w-[1em] h-[1em] color-[#adadad]" />
        <div i-carbon-play-filled class="w-[2.5em] h-[2.5em] color-[#adadad]" />
        <div i-carbon-skip-forward-filled class="w-[1em] h-[1em] color-[#adadad]" />
        <div i-carbon-label class="w-[1em] h-[1em] color-[#adadad]" />
      </div>
      <div class="w-88">
        <n-progress type="line" :percentage="100" :height="3" :show-indicator="false" color="#e5e5e5" />
      </div>
    </div>

    <!-- right -->
    <div class="flex-1">
      780
    </div>
  </div>
</template>
