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
        <h1 class="font-formula p-2">
          {{ this.data.name }}
        </h1>
      </div>
      <div class="relative w-full h-72 overflow-hidden">
        <img
          :class="'absolute w-full h-full object-cover'"
          :src="'/src/assets/img/teams/' + this.data.image"
          :alt="this.data.slug"
        >
      </div>
      <div class="font-formula text-sm p-4 text-black">
        <p>
          <span class="font-bold">Based in:</span> {{ this.data.base }}
        </p>
        <p>
          <span class="font-bold">Championships:</span> {{ this.data.championships }}
        </p>
        <p>
          <span class="font-bold">Race Starts:</span> {{ this.data.starts }}
        </p>
        <p>
          <span class="font-bold">Race Wins:</span> {{ this.data.wins }}
        </p>
        <p>
          <span class="font-bold">Pole Positions:</span> {{ this.data.poles }}
        </p>
        <p>
          <span class="font-bold">Podiums:</span> {{ this.data.podiums }}
        </p>
        <p>
          <span class="font-bold">Points:</span> {{ this.data.points }}
        </p>
        <p>
          <span class="font-bold">2024 Position:</span> {{ this.data.ly_pos }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
