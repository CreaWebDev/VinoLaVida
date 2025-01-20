<template>
  <div id="grape_gallery" class="pt-12">
    <button @click="showCompareOverlay = true"
      ref="comp_btn"
      v-show="store.userSelection.length > 2"
      class="flex place-self-center w-40 bg-golden text-softPink justify-center rounded hover:font-bold hover:bg-golden hover:text-softPink animate-bounce"
    >COMPARE</button>
    
    <div class="bg-softPink text-golden w-full flex flex-row flex-wrap justify-around space-x-4 ">
      <div  
        v-for="(g, index) in store.grapesToCompare" :key="( g as Grape).ind"
        class="flex flex-row space-x-1"
      >
        <div class="text-sm place-self-end">{{( g as Grape).name }}</div>
        <p class="place-self-bottom hover:scale-110"
          @click="removeFromSelection(index)"
        >
          <font-awesome :icon="faEraser" />
        </p> 
      </div>
      <button @click="store.resetUserSelection"
        v-show="store.userSelection.length"
        class="flex place-self-end text-sm hover:font-bold"
      >RESET</button>
    </div>
    <section class="flex md:flex-row flex-wrap justify-center md:justify-around">
      <div class=""
        v-for="(p, index) in grapeList"
        :key="p.ind"
      >
        <button
          @click="addToSelection(p)"
          class="w-24 h-24 mx-4 mt-8 flex flex-col border-4 rounded-b-full md:rounded-b-[84px] disabled:opacity-35" 
          :class="p.type == 'red'? 'border-red' : 'border-yellow'"
          :style="{ backgroundImage: `url(/images/grapes${p.img_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:  'bottom'}"
          :disabled="store.$state.userSelection.includes(p)"
        >
        </button>
        <h3
          class="text-sm text-golden text-center z-40" 
        > {{ p.name }} 
        </h3>
      </div>
    </section>
    <div v-if="showCompareOverlay">
      <CompareOverlay 
        :listOfSelectedGrapes="store.grapesToCompare" 
        @close-modal="showCompareOverlay = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CompareOverlay from './CompareOverlay.vue'
import { useUserStore } from '@/stores/user'
import { type Grape } from '@/types/Models'
//make pseudo api call for this
import grapes from  '@/content/grapes.json'

import { faEraser } from '@fortawesome/free-solid-svg-icons'

const store = useUserStore()

const grapeList = ref<Grape[]>()

const addToSelection = (g: Grape) => {
  if (store.userSelection.length < 3) {
    store.setUserSelection(g)
  } else {
    scrollTo(comp_btn)
  }
}
const removeFromSelection = (index: number) => {
  store.modifyUserSelection(index)
}

const comp_btn = ref<HTMLElement | null>(null)

const scrollTo = (view: Ref<HTMLElement | null>)=> {
  view.value?.scrollIntoView({ behavior: 'smooth'})
}

const showCompareOverlay = ref(false)

onMounted(() => {
  grapeList.value = grapes.filter(el => el.img_url != null)
})

</script>