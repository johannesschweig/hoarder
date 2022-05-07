<script setup>
import { useStore } from '../stores/index'
import { storeToRefs } from 'pinia'

const { works } = storeToRefs(useStore())


</script>

<template>
  <div class='grid'>
      <div
        v-for='work in works'
        class='card'>
        <div
          class='image'
          :style="{'background-image': `url(${work.image})`}"/>
        <div class='text'>
          <span class='title'>{{ work.title }}</span>
          <br>
          <span class='artist'>{{ work.artist }}</span>
        </div>
      </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.image {
  height: 250px;
  background-size: cover;
}

.text {
  padding: 8px;
}

.artist {
  font-size: 14px;
  opacity: .8;
}

.card {
  width: 300px;
  height: 300px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 2px;
}
</style>
