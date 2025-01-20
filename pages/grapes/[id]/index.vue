<template>
  <div class="flex flex-col h-screen">
    <GrapeVariant 
      :grape="grape"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GrapeVariant from '@/components/grapes/GrapeVariant.vue'
import { type Grape } from '@/types/Models'
import currentGrape from '@/content/grapes.json'
const route = useRoute()

const grape = ref<Grape>()
const grapeId = parseInt(route.params.id)

definePageMeta({
  layout: "main-layout"
})

useHead({
  title: "Grapegallery"
})

onBeforeMount(() => {
  grape.value = currentGrape[grapeId]
}
)
</script>