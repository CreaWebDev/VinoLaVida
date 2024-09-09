<template>
  <div class="flex flex-col h-screen">
    <GrapeVariant 
      :grape="grape"
    />
  </div>
</template>

<script setup lang="ts">
import GrapeVariant from '@/components/grapes/GrapeVariant.vue'

import { ref } from 'vue'
import { type Grape } from '@/types/Models'
import currentGrape from '@/content/grapes.json'
const route = useRoute()
const grape = ref<Grape>()

definePageMeta({
    layout: "main-layout"
  })

useHead({
  title: "Grapegallery"
})

onBeforeMount(() => {
  grape.value = currentGrape[route.params.id]
})

</script>