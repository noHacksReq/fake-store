import { defineStore } from 'pinia'
import  * as APICalls from './api.js';

export const useProdsStore = defineStore('products', {
    state: () => {
        return {
            categories: [],
            selectedCat: null,
            productsList: [],
        }
    },
    actions: {
        async getCats() {
            try{
                await APICalls.getCategories().then(res => this.categories = res)
            }catch(error) {
                console.log('error fetching categories')
            }
            
        },
        async getProds() {
            
            console.log(this.selectedCat)
            try{
                await fetch(
                `https://fakestoreapi.com/products/category/${store.selectedCat}`).then(res => this.productsList = res)
                
                
                  
            } catch(error) {
                console.log('error fetching products')
            }
        }
    }
})

