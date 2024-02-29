<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'
import { useProdsStore } from '../productStore.js'
const store = useProdsStore()




</script>

<template>
  <section class="modalMain">
    <div class="modalCont">
      <h1>{{ store.selectedCat }}</h1>
      <button @click="store.toggleModal">close</button>
    </div>
    
  </section>
  

</template>

<style scoped>

.modalMain {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  
  overscroll-behavior: contain;
  
  
}

.modalCont {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
  color: white;
  z-index: 3;
  left: 0;
  top: 0;
  
  
 

}

</style>
