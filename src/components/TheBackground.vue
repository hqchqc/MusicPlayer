<template>
  <div class="inset-0 absolute bg-bottom bg-no-repeat bg-slate-50 background">
    <slot />
  </div>
</template>

<style scoped>
.background {
  background: url('/background.jpg');
  background-size: cover;
}

.dark .background  {
  background: url('/dark-background.jpg');
}
</style>
