<template>
  <footer class="z-10 text-black mb-20">
    <div class='flex justify-center text-sm'>
      © 2025 Pia Roel Jørgensen <br>
      Idea / Design / Development 
    </div>
  </footer>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
// import VinoLogo from './VinoLogo.vue'

const links = ref( [
  { title: 'Vin-blog´en', linkTo: '/' },
  { title: 'Månedens drue', linkTo: '/' },
  { title: 'Site Map', linkTo: '/' },
  { title: 'Black Friday´s Wine Bar', linkTo: '/' }
])
</script>
