<script setup>
import {   ref, computed, watchEffect } from 'vue'
import  * as APICalls from '../api.js'
import { useProdsStore } from '../productStore.js'
import { storeToRefs } from 'pinia'

const store = useProdsStore()

let {selectedCat} = storeToRefs(store);

function dealOfday() {
  store.selectedCat = null;
}




</script>

<template>
  <h1 >
    
    Category {{ store.selectedCat }}
  </h1>
  <section class="prodPage">
    <h2 v-if="store.selectedCat === null">No Cat Selected</h2>
    <ul class="prodList" v-else >
      <li class="prodItem" v-for="prod in store.productsList">
        <img class="prodImg" :src="`${ prod.image }`">
        <h3>{{ prod.title }}</h3>
        <h4>Price: {{ prod.price }}</h4>
         
      </li>
    </ul>
  </section>

  <button @click="dealOfday">test</button>
</template>

<style scoped>


.prodPage {
  
  margin: 10px 2%;
}

.prodList {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
}

.prodItem{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20vw;
  padding: 0 15px;
  flex-shrink: 0;
 }

.prodImg {
  
  height: 250px;
  object-fit: contain;
  
}
</style>
