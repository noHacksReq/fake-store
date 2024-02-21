<script setup>
import {  ref } from 'vue';
import  * as APICalls from '../api.js'
import { useProdsStore } from '../productStore.js';



let cats =ref([]);
let getCat = ("");

let previewCat = ref([]);

const store = useProdsStore();

const props = defineProps({
  testProp:String
}
)



function selectedCat(e) {
  
  store.selectedCat = e.target.innerHTML;
  
  APICalls.getOneCategory(store.selectedCat)
    .then(res=> store.productsList = res)
}

store.getCats()



</script>

<template>
  <section class="topnav"
  ><h1>
    Welcome to the Fake Store!
  </h1>
    
    <ul class="topnavLi">
      <li
      class="liItem"
      v-for=" cat  in store.categories"
      :key="cat"
      @click="selectedCat"
      >
      {{cat}}
    </li>
    </ul>
  </section>
   
</template>

<style scoped>

* {
  outline: 1px solid rgb(99, 219, 30);
}
.topnav {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  
  font-family: 'roboto', sans-serif;
  color: var(--grey);
  font-weight: 500;
  background-color: var(--light-brown);
}

.topnav h1 {
  
  font-weight: 600;
  margin: 10px 0 0 0;
}



.topnavLi{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  width: 95%;
}

.liItem {
  cursor: pointer;
}
</style>
