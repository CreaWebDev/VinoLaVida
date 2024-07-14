<template>
  <div class="w-full bg-black pl-8">
    <p class="text-white font-italiana">
      VINO la VIDA
    </p>
    </div>
</template>

<script setup lang="ts">

const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})

</script>
