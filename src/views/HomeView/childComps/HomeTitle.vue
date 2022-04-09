<script setup lang="ts">
import TimeClock from "@/assets/icons/Outline/Time Circle.svg";
</script>

<template>
  <div class="p-6 pb-0.5 flex flex-row justify-between items-center">
    <div>
      <div class="text-2xl font-semibold">
        <span>Hai, John</span>
      </div>
      <div class="text-sm">
        <span>Find your favorite song here</span>
      </div>
    </div>

    <div class="h-10 w-10 bg-slate-100 rounded-3xl overflow-hidden">
      <img :src="TimeClock" class="w-5 h-5 m-2.5" />
    </div>
  </div>
</template>
