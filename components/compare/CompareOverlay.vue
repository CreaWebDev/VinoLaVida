<template>
    <div class="w-full h-full bg-black fixed top-0 left-0 flex flex-row justify-center space-x-4 flex-wrap z-50">
        <button @click="emit('closeModal')"
            class="bg-golden absolute top-4 right-4 px-2 hover:bg-softPink"
        >Close</button>
        <div class="text-golden"
            v-for="(l, index) of props.listOfSelectedGrapes" :key="index"
        >
            <div 
                class="min-w-40 min-h-40 flex flex-col mt-16 border-2 rounded-b-full md:rounded-b-[84px] disabled:opacity-35 animate-pulse" 
                :class="l.type == 'red'? 'border-red' : 'border-yellow'"
                :style="{ backgroundImage: `url(/images/grapes${l.img_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:  'bottom'}"
              >
            </div>
            <h3
              class="text-sm text-golden text-center z-40" 
              > {{ l.name }} 
            </h3>
            <p
              class="text-xs text-golden text-center z-40" 
              > {{ l.acidity }} 
            </p>
            <p
              class="text-xs text-golden text-center z-40" 
              > {{ l.tannins }} 
            </p>
        </div>
        <div
            class="text-golden color-golden">
            <hr />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Grape } from '@/types/Models'

const props = defineProps({
    listOfSelectedGrapes: { 
        type: Array<Grape>
    }
})

const emit = defineEmits<{
   (e: "closeModal"): void 
}>()


</script>