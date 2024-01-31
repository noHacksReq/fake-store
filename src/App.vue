<script setup>
import Main from './components/Main.vue'
import Cart from './components/Cart.vue'
import TopNav from './components/TopNav.vue'


</script>

<template>
  <TopNav testProp="heello im a prop"/>
  <Main @test-emit="(i) => {debugger}" />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
