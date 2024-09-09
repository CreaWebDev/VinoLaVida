<template>
  <div class="flex flex-col h-screen">
    <!-- <h1 class="text-lg pl-4 pt-8 uppercase">Grape Details</h1> -->
    <GrapeVariant 
      :grape="grape"
    />
    <!-- <NuxtPage :grape="grape"></NuxtPage> -->
  </div>
</template>

<script setup lang="ts">
import GrapeVariant from '@/components/grapes/GrapeVariant.vue'

import { ref } from 'vue'
import { type Grape } from '@/types/Models'

const route = useRoute()
const grape = ref<Grape>()

const currentGrape = await queryContent('/grapes')
  .find()

definePageMeta({
    layout: "main-layout"
  })

useHead({
  title: "Grapegallery"
})

onBeforeMount(() => {
  grape.value  = currentGrape[0].body[route.params.id-1]
})

</script>