<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleSmall',
  props: {
    data: Object,
  }
})
</script>

<template>
  <router-link :to="{ name: 'article', params: { slug: this.data.slug }}">
    <div class="w-80 overflow-hidden border-2 border-gray-300 rounded-sm h-auto text-white cursor-pointer">
      <div class="relative w-full h-48 overflow-hidden">
        <img
          :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
          :src="'/src/assets/img/articles/' + this.data.image"
          :alt="this.data.slug"
        >
      </div>
      <p class="p-2 bg-red-700 text-sm">
        {{ this.data.title }}
      </p>
    </div>
  </router-link>
</template>

<style scoped>

</style>
