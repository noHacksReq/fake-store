<script setup>
import {   ref, computed, watchEffect } from 'vue'
import  * as APICalls from '../api.js'
import { useProdsStore } from '../productStore.js'
import { storeToRefs } from 'pinia'
import Modal from './Modal.vue'

const store = useProdsStore();


</script>

<template>
  <h1 class="catTitle">
    
    Category {{ store.selectedCat }}
  </h1>
  <section v-if="store.showModal === true">
    <Modal/>
  </section>
  
  <section class="prodPage">
    <h2 v-if="store.selectedCat === null">No Cat Selected</h2>
    <ul class="prodList" v-else >
      <li class="prodItem" v-for="prod in store.productsList"
      @click="store.getItem()"
      
      >
        <img 
        @click="store.toggleModal()"
        class="prodImg" :src="`${ prod.image }`">
        <h3>{{ prod.title }}</h3>
        <h4>Price: {{ prod.price }}</h4>
         
      </li>
    </ul>
  </section>

  <button >test</button>
</template>

<style scoped>
.catTitle {
  width: 50%;
  margin: 0 auto;
}

.prodPage {
  
  margin: 10px 2%;
  contain: content;
}

.prodList {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: auto;
}

.prodItem{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: var(--golden-brown);
  width: 20vw;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  flex-shrink: 0;
}

 .prodItem h3 {
  text-align: left;
 }

.prodImg {
  width: 100%;
  max-width: 300px;
  object-fit: contain;
  border-radius: 5px;
}
</style>
