<template>
  <div class="flex flex-col w-full p-8">
    <div v-for="map in mapImgs" 
      :key="map.id"
      class="mb-8"
    >
      <p class="py-2">{{ map.title }}</p>
      <img :src="map.mapImg">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mapImgs = ref([
  { id: 1, title: 'France', mapImg: '/images/maps/map_france.png'},
  // { id: 2, title: 'Spain',  mapImg: '/images/maps/map_france.png'},
  // { id: 3, title: 'italy',  mapImg: '/images/maps/map_france.png'},
])
</script>