<template>
  <div class="w-full sticky top-0 z-50">
    <h3 class="px-4 pt-8">
      {{ props.grape?.name }}
    </h3>
    <div
      class="mx-4 my-4 w-24 h-24 flex flex-col border-2 rounded-b-full md:rounded-b-[84px]" 
      :class="props.grape?.type == 'red'? 'border-red' : 'border-yellow'"
      :style="{ backgroundImage: `url(/images/grapes${$props.grape?.img_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:  'bottom'}"
    >
    </div>
    <div class="flex flex-row justify-between md:justify-around px-4 bg-softPink">
      <div v-for="(tab, index) of tabs" :key="index" >
        <TabItem class=""
          :isActive="activeTab == index"
          @click="activeTab = index"
        >
          <div 
            class="text-golden hover:font-bold text-sm py-2"
            :class="activeTab == index? 'font-bold': ''"
          >
            {{tab.text}}
          </div>
          <div v-show="activeTab == index" class="absolute left-0">
            <p class="text-black px-4">
              {{ tab.content }}
            </p>
          </div>
        </TabItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabItem from '@/components/generic/tabs/TabItem.vue'
import { type Grape } from '@/types/Models'

const props = defineProps<{
  grape?: Grape
}>()

const activeTab = ref(0)

const tabs = ref([
  { metaTitle: 1, text: 'FLAVOUR', content: props.grape?.flavor_profile },
  { metaTitle: 2, text: 'HISTORY', content: props.grape?.history },
  { metaTitle: 3, text: 'FACTS', content: props.grape?.acidity }
])

</script>