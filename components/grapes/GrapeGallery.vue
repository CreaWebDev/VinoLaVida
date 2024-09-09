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
        @click="scrollToTop"  
      >
        <font-awesome :icon="faUpLong" />
      </button>
      <div class="flex flex-row w-full justify-between pt-2 px-2" >
        <button @click="showDropdown = !showDropdown" class="text-golden w-16 h-10 bg-softPink rounded-lg">
          <font-awesome :icon="showDropdown == true? faChevronUp : faChevronDown"></font-awesome>
          <div class="absolute transition-all bg-softPink pt-4 pl-2 h-96 z-50 overflow-scroll" :class="showDropdown? 'show': 'hidden'">
            <ul v-for="g in grapeSelection" :key="g.ind" >
              <li class="text-left" v-if="filter == 'All' || filter == g.type">
                <NuxtLink
                  :href="`#${g.ind}`"
                  @click="scrollToAnchor(g.name)"  
                >
                  {{ g.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </button>
        <button @click="toggleIsSeen" class="text-golden w-16 h-10 bg-softPink rounded-lg z-70">
          <font-awesome :icon="button.icon" size="xl"/>
        </button>
      </div>
    </div>
    <section class="flex md:flex-row flex-wrap justify-center md:justify-around">
      <div class=""
        v-for="p in grapeSelection"
        :key="p.ind"
        :id="p.ind"
      >
        <NuxtLink
          :to="`/grapes/${p.ind}`"
          v-if="filter == p.type || filter == 'All'" 
          class="w-52 h-52 mx-4 mt-8 flex flex-col border-4 rounded-b-full md:rounded-b-[84px]" 
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
import grapes from  '@/content/grapes.json'
// const grapes = await queryContent('grapes').findOne()

import { faEye, faEyeSlash, faChevronDown, faChevronUp, faUpLong } from '@fortawesome/free-solid-svg-icons'

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
  grapeSelection.value = grapes
})

</script>