<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

import { useProdsStore } from '../productStore.js'
const store = useProdsStore()



</script>

<template>
  <section v-if="store.selectedItem !== null" 
    :class="[store.showModal ? 'modalMain' : 'hide'] "
  >
    <div class="modalCont">
      <div class="close" 
      @click="store.toggleModal">
        <span >close</span>
      <span  
      class="material-icons md-18 close">close</span>
      </div>
      


      <h1>{{ store.selectedItem.title }}</h1>
      <img class="modalImage" :src="`${store.selectedItem.image}`">
      <p>{{ store.selectedItem.description }}</p>
      <h3>Price: ${{ store.selectedItem.price }}</h3>
      <button>add to cart</button>

    </div>
    
  </section>
  

</template>

<style scoped>
.hide {
  display: none;
}

.show {
  display: flex;
}

.modalMain {

  height: 100vh;
  width: 100vw;
  
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  overflow: auto;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.5);

}

.modalCont {
  
  width: 66%;
  padding: 20px 0;
  
  color: white;
  z-index: 3;
  left: 0;
  top: 0;
}

.modalImage {
  height: 50%;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.close {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin: 1px;
}



</style>
