<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardDriver',
  props: {
    data: Object,
  }
})
</script>

<template>
  <router-link :to="{ name: 'driver', params: { slug: this.data.slug }}">
  <div class="w-60 overflow-hidden border-2 border-gray-300 rounded-md h-auto text-white cursor-pointer">
    <div class="relative w-full h-60 overflow-hidden">
      <img
        :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
        :src="'/src/assets/img/drivers/' + this.data.image"
        :alt="this.data.slug"
      >
    </div>
    <div class="bg-red-700 text-white text-center">
      <h1 class="p-2">{{ data.name }}</h1>
    </div>
  </div>
  </router-link>
</template>

<style scoped>

</style>
