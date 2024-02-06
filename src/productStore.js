import { defineStore } from 'pinia'
import  * as APICalls from './api.js';

export const useProdsStore = defineStore('products', {
    state: () => {
        return {
            count: 0,
            categories: [],
            selectedCat: null
        }
    },
    actions: {
        async getCats() {
            try{
                await APICalls.getCategories().then(res => this.categories = res)
            }catch(error) {
                console.log('error')
            }
            
        }
    }
})

