<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from {
  @apply translate-x-2 opacity-0;
}

.page-leave-to {
  @apply -translate-x-2 opacity-0;
}
</style>