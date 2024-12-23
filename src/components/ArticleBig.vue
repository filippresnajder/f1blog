<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleBig',
  props: {
    data: Object,
  }
})
</script>

<template>
  <div class="min-w-80 w-6/12 max-w-3xl overflow-hidden border-2 border-gray-300 rounded-sm h-auto text-white cursor-pointer">
    <router-link :to="{ name: 'article', params: { slug: this.data.slug }}">
      <div class="relative w-full h-96 overflow-hidden">
        <img
          :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
          :src="'/src/assets/img/articles/' + this.data.image"
          :alt="this.data.slug"
        >
      </div>
      <p class="font-formula p-2 bg-red-700 text-md">
        {{ this.data.title }}
      </p>
    </router-link>
  </div>
</template>

<style scoped>
</style>
