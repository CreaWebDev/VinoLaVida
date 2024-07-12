<template>
  <div>
    <GrapeVariant :grape="grape" />
    <NuxtPage :grape="grape"></NuxtPage>
  </div>
</template>

<script setup lang="ts">
import GrapeVariant from '@/components/grapes/GrapeVariant.vue'
import { onMounted, ref } from  'vue'

import { type Grape } from '@/types/Models'

const route = useRoute()
const grape = ref<Grape>()

definePageMeta({
  layout: "main-layout"
})

useHead({
  title: route.params.id
})

onMounted(() => {
  grape.value  = 5
})

</script>