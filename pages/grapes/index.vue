<template>
  <div class="flex flex-col">
    <h1 class="text-lg pl-4 pt-8 uppercase">Grape Gallery</h1>
    <GrapeGallery />
  </div>
</template>

<script setup lang="ts">
  import GrapeGallery from '@/components/grapes/GrapeGallery.vue'

  definePageMeta({
    layout: "main-layout"
  })

  useHead({
    title: "Grapegallery"
  })
  
</script>