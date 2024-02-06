<script setup>
import {  ref } from 'vue';
import { useProdsStore } from '../productStore.js';
import  * as APICalls from '../api.js';

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
}

store.getCats()



</script>

<template>
  <section class="topnav"
  >
    {{ testProp }}
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
  width: auto;
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
