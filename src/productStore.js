import { defineStore } from 'pinia'
import  * as APICalls from './api.js';

export const useProdsStore = defineStore('products', {
    state: () => {
        return {
            categories: [],
            selectedCat: null,
            seleectedItem: [null],
            productsList: [],
            showModal: false,
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
            
            try{
                await fetch(
                `https://fakestoreapi.com/products/category/${store.selectedCat}`).then(res => this.productsList = res)
            } catch(error) {
                console.log('error fetching products')
            }
        },
        getItem(){
            // need to get itme info on click here
            debugger
            console.log(this.productsList)
        },
    

    toggleModal() {
        this.showModal = !this.showModal
    }},
})

