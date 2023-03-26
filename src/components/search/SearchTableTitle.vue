<script setup lang="ts">
import { NEllipsis } from 'naive-ui'
const { title, isNeedVip } = defineProps<{
  title: string
  isNeedVip: boolean
}>()
</script>

<template>
  <div class="flex justify-start items-center">
    <NEllipsis style="max-width: 100px">
      {{ title }}
    </NEllipsis>
    <div class="flex ml-4 justify-between w-18 align-middle items-center">
      <div v-show="isNeedVip" class="border-[#fe672e] border inline-block color-[#fd7e4e] px-1 leading-3">
        VIP
      </div>
      <div v-show="isNeedVip" class="border-[#fe672e] border inline-block color-[#fd7e4e] px-1 leading-3">
        试听
      </div>
    </div>
  </div>
</template>
