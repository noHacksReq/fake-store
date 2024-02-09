<script setup>
import {   ref, computed, watchEffect } from 'vue'
import  * as APICalls from '../api.js'
import { useProdsStore } from '../productStore.js'
import { storeToRefs } from 'pinia'

const store = useProdsStore()

let {selectedCat} = storeToRefs(store)







</script>

<template>
  <h1 >
    
    Category {{ store.selectedCat }}
  </h1>
  <section>
    <h2 v-if="store.selectedCat === null">No Cat Selected</h2>
    <ul v-else >
      <li v-for="prod in store.productsList">
        {{ prod.title }}
         <img :src="`${ prod.image }`">
      </li>
    </ul>
  </section>

  <button >test</button>
</template>

<style scoped>
img {
  height: 250px;
}
</style>
