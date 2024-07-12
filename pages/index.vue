<template>
  <div class="flex flex-col h-screen">
    <div class="w-1/2 pl-8 pt-16">
      <img src="/images/wine_text.svg">
    </div>
    <p class="w-1/2 pl-8 text-sm mt-8">
      Are you just as excited as me about wine tasting? <br>
      Then you will enjoy this app I have made.<br><br>
      My philosophy behind it is a belief that training our senses to connect will make it possible to identify which grape we are tasting.
    </p>
    <div class="fixed bottom-8 right-0">
      <img src="/images/bg/side_banner.png" class="w-40">
    </div>
  </div>
</template>
  
<script setup lang="ts">
 

  definePageMeta({
    layout: "main-layout"
  })

  useHead({
    title: "Startpage"
  })
</script>
  