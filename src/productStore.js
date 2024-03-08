import { defineStore } from 'pinia'
import  * as APICalls from './api.js';

export const useProdsStore = defineStore('products', {
    state: () => {
        return {
            categories: [],
            selectedCat: null,
            selectedProdId: null,
            selectedItem: [],
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
        getItem(key){
            // need to get itme info on click here
            
            this.selectedProdId = key;
            
            APICalls.getSingleProd(this.selectedProdId).then(res => this.selectedItem = res)
        },
    

    toggleModal() {

        this.showModal = !this.showModal
    }},
})

