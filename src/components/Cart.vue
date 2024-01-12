<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

let carts = ref([]);
let cartProds = ref([]);

async function getCart() {
    await APICalls.getCart().then(res => carts.value = res)
    //console.log(carts.value)
}

getCart()


</script>

<template>
  <h2>Cart</h2>
  <ul>
    <li v-for="item in carts">
        <div v-for="products in item">
            {{ products.productId }}
        </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
