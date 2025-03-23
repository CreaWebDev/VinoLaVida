<template>
  <div id="grape_gallery" class="pt-12">
    <div class="sticky top-10 flex flex-row justify-between pb-4">
      <button @click="showCompareOverlay = true" :disabled="store.userSelection.length < 1"
        ref="comp_btn"
        class="w-1/2 mr-4 bg-golden text-softPink justify-center rounded hover:font-bold disabled:font-normal hover:bg-golden hover:text-softPink"
      >
        <p v-if="store.userSelection.length < 2">
          Pick your grapes
        </p>
        <p v-else>
          COMPARE
        </p>
      </button>
      <button @click="store.resetUserSelection"
        v-show="store.userSelection.length"
        class="w-1/2 ml-4 bg-golden text-softPink justify-center rounded hover:font-bold hover:bg-golden hover:text-softPink"
      >RESET
      </button>
    </div>
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
    <!-- <div v-if="showCompareOverlay" class="rotate-prompt w-screen h-full fixed top-0 left-0 z-50 bg-black text-white">
      <div class="w-16 ml-16 pt-20 device">
        <img src="/images/guides/device_soft.png" > 
      </div>
      <p class="text-left ml-16 pt-20 text-2xl font-display">Rotate screen for best<br> user experience</p>
    </div> -->
    <div v-if="showCompareOverlay" class="">
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
import grapes from  '@/static/grapes.json'

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

<style lang="css">

@keyframes device{
  /* from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(90deg)
  }
}
.device {
  animation: device 1500ms infinite ease;
  transform-origin: bottom;
}

@media only screen and (orientation: landscape) {
  .rotate-view {
    flex-direction: column;
  }

  .rotate-prompt  {
    display: none;
  } */
}

</style>