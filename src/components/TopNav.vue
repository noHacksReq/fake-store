<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

let cats =ref([]);
let getCat = "";
let selectedCat = ([]);
let previewCat = ref([]);

async function getCats() {
  await APICalls.getCategories().then(res => cats.value = res )
  
  }

async function getSelectedCat(cat) {
  getCat = cat
  fetch('src/api.js'), {
    method: 'POST',
    body: JSON.stringify({
      getCat: getCat
    })
  }
  await APICalls.getOneCategory(getCat).then (res => selectedCat = res)
  console.log(selectedCat)
  
}

getCats()

</script>

<template>
  <section class="topnav">
    top nav
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
