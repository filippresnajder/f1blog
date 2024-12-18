<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardCalendar',
  props: {
    data: Object,
  }
})
</script>

<template>
  <router-link :to="{ name: 'track', params: { slug: this.data.slug }}">
    <div class="w-96 overflow-hidden border border-gray-200 rounded-md h-auto text-white cursor-pointer">
      <div class="font-formula bg-red-700 text-white text-center">
        <h1 class="p-2">
          Round No. {{ this.data.id }}
        </h1>
      </div>
      <div class="relative w-full h-52 overflow-hidden">
        <img
          :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
          :src="'/src/assets/img/tracks/' + this.data.image"
          :alt="this.data.slug"
        >
      </div>
      <div class="bg-red-700 text-white text-center">
        <h1 class="font-formula p-2">
          {{ this.data.name }}
        </h1>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
</style>
