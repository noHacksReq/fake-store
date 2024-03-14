<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

import { useProdsStore } from '../productStore.js'
const store = useProdsStore()




</script>

<template>
  <section v-if="store.selectedItem !== null" class="selectedProdPage">
    <h1>{{ store.selectedItem.title }}</h1>
      <img class="modalImage" :src="`${store.selectedItem.image}`">
      <p>{{ store.selectedItem.description }}</p>
      <h3>Price: ${{ store.selectedItem.price }}</h3>
    <p @click="store.toggleSelectedPage()">
      back to {{ store.selectedCat }}
    </p>
  </section>
  

</template>

<style scoped>
.prodPage {

}



</style>
