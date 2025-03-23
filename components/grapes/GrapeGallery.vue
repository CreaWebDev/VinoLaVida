<template>
  <div id="grape_gallery" class="pt-12">
    <div id="filters" class="w-full sticky top-0 z-50">
      <div class="flex flex-row justify-around bg-softPink">
        <button
          class="text-xs text-golden hover:bold capitalize py-2 px-8 rounded-lg"
          @click="filter = 'All'"
          :class="filter == 'All' ? 'font-bold' : 'font-normal'"
        >
          <p>Show all</p>
        </button>
        <button v-for="(p, index) in filterList"
          class="text-xs text-golden hover:font-bold capitalize py-2 px-8 rounded-lg"
          :key="index"
          @click="filter = p"
          :class="p == filter ? 'font-bold' : 'font-normal'">
          {{ p }}
        </button>
      </div>
      <button 
        class="fixed bottom-20 right-2 text-golden w-16 h-10 bg-softPink rounded-lg"
        @click="scrollToTop()"  
      >
        <font-awesome :icon="faUpLong" />
      </button>
      <div class="flex flex-row w-full justify-end pt-2 px-2" >
        <button @click="toggleIsSeen" class="text-golden w-16 h-10 bg-softPink rounded-lg z-70">
          <font-awesome :icon="button.icon" size="xl"/>
        </button>
      </div>
    </div>
    <section class="flex md:flex-row flex-wrap justify-center md:justify-around">
      <div class=""
        v-for="p, index in grapeSelection"
        :key="index"
      >
        <NuxtLink
          :to="`/grapes/${index}`"
          v-if="filter == p.type || filter == 'All'" 
          class="w-52 h-52 mt-8 flex flex-col border-4 rounded-b-full md:rounded-b-[84px]" 
          :class="p.type == 'red'? 'border-red' : 'border-yellow'"
          :style="{ backgroundImage: `url(/images/grapes${p.img_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:  'bottom'}"
        >
        </NuxtLink>
        <div 
          v-if="filter == p.type || filter == 'All'" 
          class="relative -top-3"
        >
          <img :src="'images/grapes/foot_'+ `${p.type}` +'.svg'" >
          <h3 v-show="isSeen"
            class="text-lg text-golden text-center z-40" 
          > {{ p.name }} 
          </h3>
        </div>
      </div>
      <NuxtPage :grapes="grapes" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Grape } from '@/types/Models'
// import axios from 'axios'
import grapes from  '@/static/grapes.json'

import { faEye, faEyeSlash, faUpLong } from '@fortawesome/free-solid-svg-icons'

// const fetchData = async () => {
//   try {
//     const response = await fetch('/grapes.json')
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`)
//     }
//     grapes.value = await response.json()
//   } catch (err) {
//     error.value = err.message;
//   } finally {
//     // last code goes here...if any
//   }
// };


// const grapes = ref<Grape[]>()
const grapeSelection = ref<Grape[]>()

const filterList = ref(["red", "white"])
const filter = ref("All")
const showDropdown =  ref(false)
const button = {
  icon: faEyeSlash
}

const { scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})

const isSeen = ref(true)

const toggleIsSeen = () => {
  isSeen.value = !isSeen.value
  button.icon = isSeen.value ? faEyeSlash : faEye;
}

onMounted(() => {
  // fetchData()
  grapeSelection.value = grapes.filter(el => el.img_url != null)
})

</script>