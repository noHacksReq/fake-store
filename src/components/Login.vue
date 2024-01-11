<script setup>
import {   ref } from 'vue'
import  * as APICalls from '../api.js'

let userName = ref("");
let pword = ref("");



function checkCreds(userName, pword) {
  console.log(userName)
  console.log(pword)
  // fetch('src/api.js'), {
  //   method: 'POST',
  //   headers: {
  //         "Content-Type": "application/json",
  //       },
  //   body: JSON.stringify({
  //    'userName': userName,
  //    'pasword': pword
  //   })
  //}
 
  
    }


</script>

<template>
<form >
  <label for="userName">UserName:</label>
  <input v-model="userName" type="text" id="userName">
  <input v-model="pword" type="password" id="pword">
  <input type="submit" value="Submit"
  @click.prevent="checkCreds(userName, pword)"
  >
</form>
  
 
</template>

<style scoped>

</style>
