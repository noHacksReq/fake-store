<script setup>
import {  ref, reactive } from 'vue'
import  * as APICalls from '../api.js';

let cats =ref([]);
let getCat = ("");
let selectedCat = ref("");
let previewCat = ref([]);

const props = defineProps({
  testProp:String
}
)




async function getCats() {
  // gets categories to display in topnav
  await APICalls.getCategories().then(res => cats.value = res )
  
  }

async function getSelectedCat(cat) {
  // set the selected category
  
  selectedCat = cat
  console.log(selectedCat)
  
}

getCats()

</script>

<template>
  <section class="topnav">
    {{ testProp }}
    <ul class="topnavLi">
      <li
      class="liItem"
      v-for=" cat  in cats"
      :key="cat"
      @click="getSelectedCat(cat)"
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
