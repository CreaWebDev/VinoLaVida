import { ref } from 'vue'
import { type Grape } from '@/types/Models'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userSelection: []
    }),
    getters:{
        grapesToCompare(state){
            return state.userSelection
        }
    },
    actions: {
        setUserSelection(grape: any){
            this.userSelection?.push(grape)
        },
        
        modifyUserSelection(index: number){
            this.userSelection?.splice(index, 1)
        },

        resetUserSelection() {
            this.userSelection = []
        }
    }
})