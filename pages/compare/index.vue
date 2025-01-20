<template>
  <div class="flex flex-col px-4 ">
    <h1 class="text-lg py-4 uppercase">Compare when tasting</h1>
    <p class="text-sm">Pick the (maximum of 3) grapes you need for comparison.<br>
    click
    <strong>COMPARE</strong>
    when you are done.
  </p>
    <CompareComp />
  </div>
</template>
  
<script setup lang="ts">
import CompareComp from '~/components/compare/CompareComp.vue';

  definePageMeta({
    layout: "main-layout"
  })

  useHead({
    title: "Compare grapes"
  })
</script>