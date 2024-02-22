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
  <section class="prodPage">
    <h2 v-if="store.selectedCat === null">No Cat Selected</h2>
    <ul class="prodList" v-else >
      <li class="prodItem" v-for="prod in store.productsList">
        {{ prod.title }}
         <img class="prodImg" :src="`${ prod.image }`">
      </li>
    </ul>
  </section>

  <button >test</button>
</template>

<style scoped>


.prodPage {
  display: flex;
  flex-direction: column;
  margin: 10px 15vw;
}

.prodList {
  list-style: none;
  width: 66vw;
}

.prodItem{
  display: flex;
  flex-direction: column;
 }

.prodImg {
  width: 33%;
  
}
</style>
