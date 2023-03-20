<script setup lang="ts">
import { NEllipsis } from 'naive-ui'
const { title, isNeedVip } = defineProps<{
  title: string
  isNeedVip: boolean
}>()
</script>

<template>
  <div class="flex justify-start items-center">
    <NEllipsis style="max-width: 200px">
      {{ title }}
    </NEllipsis>
    <div>
      <div v-show="isNeedVip" class="border-[#fe672e] border inline-block color-[#fd7e4e] ml-4 px-1 leading-3">
        VIP
      </div>
    </div>
  </div>
</template>
