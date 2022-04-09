<script setup lang="ts">
import HomeTitle from "./childComps/HomeTitle.vue";
import HomeBanner from "./childComps/HomeBanner.vue";
</script>

<template>
  <home-title />
  <home-banner />
  <div className="p-6 flex justify-between items-center">
    <div className="text-lg leading-6 font-semibold">
      <span>New Songs</span>
    </div>
    <div className="text-sm leading-5 text-[#FB233B]">
      <span>View all</span>
    </div>
  </div>
  <div className="p-6">
    <ul className="overflow-y-hidden overflow-x-auto whitespace-normal">
      <li className="w-36 inline-block  overflow-hidden">
        <div className="w-36 h-36 bg-current"></div>
        <span>All To Well (10 Minute Version)</span>
        <span>Taylor Swift</span>
      </li>

      <li className="w-36 inline-block overflow-hidden">
        <div className="w-36 h-36 bg-current"></div>
        <span>All To Well (10 Minute Version)</span>
        <span>Taylor Swift</span>
      </li>

      <li className="w-36 inline-block overflow-hidden">
        <div className="w-36 h-36 bg-current"></div>
        <span>All To Well (10 Minute Version)</span>
        <span>Taylor Swift</span>
      </li>
    </ul>
  </div>
</template>
