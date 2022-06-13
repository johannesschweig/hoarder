<script setup>
import Collection from './components/Collection.vue'
import { getStore } from './utils/index.js'

console.log("Created")
console.log(getStore())
</script>

<template>
  <main>
    <h1>Hoarder</h1>
    <Collection />
  </main>
</template>

<style>
body {
  font-family: Roboto, "sans-serif";
  background-color: rgba(0,0,0,0.8);
  color: white;
}
</style>
