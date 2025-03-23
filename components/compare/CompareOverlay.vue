<template>
    <div class="fixed top-0 left-0 w-screen px-4 h-screen z-40 overflow-scroll bg-gray landscape:content-center">
        <button @click="emit('closeModal')"
            class="bg-golden fixed top-4 right-4 px-2 hover:bg-softPink z-50"
        ><font-awesome :icon="faClose" /></button>
        <div class="flex flex-col portrait:space-y-10 landscape:flex-row landscape:justify-evenly">
            <div class="bg-softPink p-2 portrait:px-8 portrait:place-self-center" v-for="(l, index) of props.listOfSelectedGrapes" :key="index">
                <h3 class="text-md font-display tracking-widest uppercase text-center" >
                    <strong>{{ l.name }}</strong>
                </h3>
                <div 
                    class="place-self-center w-60 h-60 landscape:w-44 landscape:h-44 border-4 rounded-b-full md:rounded-b-[84px] disabled:opacity-35"          
                    :class="l.type == 'red'? 'border-red' : 'border-yellow'"
                    :style="{ 
                        backgroundImage: `url(/images/grapes${l.img_url})`, 
                        backgroundSize: 'contain', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition:  'bottom'
                    }"
                ></div>
                <div class="flex flex-col portrait:justify-around text-center text-sm">
                    <div class="flex flex-row justify-between ">
                        <div v-for="t in l.taste"
                            class="w-1/4"
                        >
                            <img :src="'/images/grapes/icons/' + t + '.svg'">
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Grape } from '@/types/Models'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
    listOfSelectedGrapes: { 
        type: Array<Grape>
    }
})

const emit = defineEmits<{
   (e: "closeModal"): void 
}>()

</script>