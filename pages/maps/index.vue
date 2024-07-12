<template>
  <div class="flex flex-col px-4">
    <h1 class="text-lg pt-8 uppercase">Wine Maps</h1>
    <MapGallery />
    <p class="pb-12 px-4">More maps will follow soon...</p>
  </div>
</template>
  
<script setup lang="ts">
 import MapGallery from '@/components/maps/MapGallery.vue'

  definePageMeta({
    layout: "main-layout"
  })

  useHead({
    title: "A world of wine"
  })
</script>