<template>
  <div class="w-full md:w-96 bg-gray">
    <div class="flex flex-col">
      <SiteHeader />
      <VinoLogo />
      <Container class="grow">
        <slot />
      </Container>
      <SiteFooter />
    </div>
    <MenuBar />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from '~/components/layout/SiteHeader.vue';
import SiteFooter from '~/components/layout/SiteFooter.vue';
import MenuBar from '~/components/navigation/MenuBar.vue';
import Container from '~/components/layout/Container.vue';
import VinoLogo from '~/components//VinoLogo.vue'

const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})

</script>