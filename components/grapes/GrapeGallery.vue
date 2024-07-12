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
        class="fixed bottom-20 right-2 md:left-80 text-golden w-16 h-10 bg-softPink rounded-lg"
        @click="scrollToTop"  
      >
        <font-awesome :icon="faUpLong" />
      </button>
      <div class="flex flex-row w-full justify-between pt-2 px-2" >
        <button @click="showDropdown = !showDropdown" class="text-golden w-16 h-10 bg-softPink rounded-lg">
          <font-awesome :icon="faChevronDown"></font-awesome>
          <div class="absolute transition-all bg-softPink pt-4 pl-2" :class="showDropdown? 'show': 'hidden'">
            <ul v-for="g in grapeSelection" :key="g.id" >
              <li class="text-left">
                <NuxtLink
                  :href="`#${g.id}`"
                  @click="scrollToAnchor(g.name)"  
                >
                  {{ g.name }}
                </NuxtLink>
              </li>
              <!-- <a class="text-sm" :href="'#' + g.id">
                {{ g.name }}
              </a> -->
            </ul>
          </div>
        </button>
        <button @click="toggleIsSeen" class="text-golden w-16 h-10 bg-softPink rounded-lg">
          <font-awesome :icon="button.icon" size="xl"/>
        </button>
      </div>
    </div>
    <section class="flex md:flex-row flex-wrap justify-center md:justify-around">
      <div class="mx-8 my-8"
        v-for="p in grapeSelection"
        :key="p.id"
        :id="p.id"
      >
        <h3
          class="text-lg text-golden text-center pb-2 z-40" 
          :class="isSeen && (p.type == filter || filter == 'All') ? 'text-golden': 'text-gray'"
        > {{ p.name }} 
        </h3>
        <div 
          v-if="filter == p.type || filter == 'All'" 
          class="w-52 h-52 md:w-52 md:h-52 flex flex-col border-4 rounded-b-full md:rounded-b-[84px]" 
          :class="p.type == 'red'? 'border-red' : 'border-yellow'"
          :style="{ backgroundImage: `url(/images/grapes${p.img_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:  'bottom'}"
        >
          <!-- <div class=" flex flex-row flex-wrap space-x-2">
            <p v-for="t in p.taste" class="text-xs">{{ t }}</p>
          </div> -->
          
          <!-- <nuxt-link :to="`/grapes/${p.id}`">
            <img :src="p.img_url" >
          </nuxt-link> -->
        </div>
        <div 
          v-show="filter == p.type || filter == 'All'" 
          class="relative -top-3"
        >
          <img :src="'images/grapes/foot_'+ `${p.type}` +'.svg'" 
          >
        </div>
      </div>
      <NuxtPage :grapes="grapes" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Grape } from '@/types/Models'
import grapes from '@/assets/grapes.json'

import { faEye, faEyeSlash, faChevronDown, faUpLong } from '@fortawesome/free-solid-svg-icons'

const grapeSelection = ref<Grape[]>()

const filterList = ref(["red", "white"])
const filter = ref("All")
const showDropdown =  ref(false)
const button = {
  icon: faEyeSlash
}

const { scrollToAnchor, scrollToTop } = useAnchorScroll({
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
  grapeSelection.value = grapes.sort()
})
// onBeforeMount(() => {
//   fetch('./grapes.json', {
//     method: 'GET',
//     headers: {
//       type: 'json'
//     }
//   })
//   .then((response: any) => {
//     response.json().then((data: any) => {
//       console.log(data)
//     })
//   })
//   .catch((error: string) => {
//     console.log(error)
//   })
  // $axios
  // .get("./grapes.json")
  // .then(response =>  {
  //   // (grapes.value = response.data.sort(sortBy))
  //   console.log(response.data)
  // })
  // .catch(error => console.log(error))

// })
    </script>