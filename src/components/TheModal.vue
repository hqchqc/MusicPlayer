<script lang="ts">
export default defineComponent({
  setup() {
    return {
      showModal: ref(false),
    }
  },
})
</script>

<template>
  <n-modal v-model:show="showModal" class="bg-white">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        噢！
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>
</template>
