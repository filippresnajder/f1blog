<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardTeam',
  props: {
    data: Object,
  }
})
</script>

<template>
  <div class="grid grid-cols-1 place-items-center mt-6">
    <div class="w-80 overflow-hidden border border-gray-200 rounded-md h-auto text-white">
      <div class="bg-red-700 text-white text-center">
        <h1 class="p-2">{{ this.data.name }}</h1>
      </div>
      <div class="relative w-full h-72 overflow-hidden">
        <img
          :class="'absolute w-full h-full object-cover'"
          :src="'/src/assets/img/teams/' + this.data.image"
          :alt="this.data.slug"
        >
      </div>
      <div class="p-4 text-black">
        <p>Based in: {{ this.data.base }}</p>
        <p>Championships: {{ this.data.championships }}</p>
        <p>Race Starts: {{ this.data.starts }}</p>
        <p>Race Wins: {{ this.data.wins }}</p>
        <p>Pole Positions: {{ this.data.poles }}</p>
        <p>Podiums: {{ this.data.podiums }}</p>
        <p>Points: {{ this.data.points }}</p>
        <p>2024 Position: {{ this.data.ly_pos }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
