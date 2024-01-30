<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

let products = ref([]);
let singleProd = ref([]);
let sortedProds = ref([]);
let categories = ref([]);
let singleCat = ref([]);
let selectedCat = ref(null);
let selectedItem = ref(null)

const props = defineProps({
  selectedCat:String
  
})



async function getAllProds() {
  await APICalls.getProducts().then(res => products.value = res)
}

async function getOneProd() {
  await APICalls.getSingleProd().then (res => singleProd.value = res)
}

async function getSorted() {
  await APICalls.getSortedProds().then (res => sortedProds.value = res)
}

async function getCats() {
  await APICalls.getCategories().then (res => categories.value = res)

}

async function getSingleCat(item) {
  selectedCat = item
  fetch('src/api.js'), {
    method: 'POST',
    body: JSON.stringify({
      //selectedCat: selectedCat
    })
  }
  await APICalls.getOneCategory(item).then (res => singleCat.value = res)
  console.log(singleCat.value)
  
}

async function addItemToCart(prodId) {
  //console.log(prodId.id)
  fetch('https://fakestoreapi.com/carts/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId:1,
                    date:2019-12-10,
                    products:[{productId:prodId.id,quantity:3}]
                }
            )
        })
            .then(res=>res.json())
            //.then(json=>console.log(json))
  
}



// getAllProds()
// getOneProd()
// getSorted()
// getCats()



</script>

<template>
  <h1 >
    SelectedProp{{ props.selectedCat }}
  </h1>
  

  <button @click="$emit('testEmit')">test</button>
</template>

<style scoped>

</style>
