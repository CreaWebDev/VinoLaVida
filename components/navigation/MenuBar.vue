<template>
  <div class="bg-black flex flex-row justify-around fixed bottom-0 w-full z-30 p-4">
    <div v-for="button in menuButtons" :key="button.id"
      :class="$route.path == button.linkTo ? 'opacity-1 border-b-2 border-white' : 'opacity-70'"
    >
      <RouterLink :to="button.linkTo"
        class="text-ocean hover:text-abricot hover:bold transition-all"
      >
        <img :src="button.icon" class="flex w-10 h-10">
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuButtons = ref([
  { id: 1, title: 'Gallery', linkTo: '/grapes', icon: '/images/buttons/grapes.svg'},
  { id: 2, title: 'Compare',  linkTo: '/compare', icon: '/images/buttons/compare.svg'},
  { id: 3, title: 'World of wine',  linkTo: '/maps', icon: '/images/buttons/maps.svg'},
])
</script>