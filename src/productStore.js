import { defineStore } from 'pinia'

export const useProdsStore = defineStore('products', {
    state: () => ({count: 0}),
})