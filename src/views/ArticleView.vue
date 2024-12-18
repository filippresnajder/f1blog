<script lang="ts">
import { defineComponent } from 'vue'
import { useArticleStore } from '@/stores/article.ts'

export default defineComponent({
  name: 'ArticleView',
  props: {
    slug: String,
  },
  data() {
    return {
      articleStore: useArticleStore(),
    }
  },
  computed: {
    articleData() {
      return this.articleStore.data
    },
    found() {
      return this.articleStore.found
    }
  },
  mounted() {
    this.fetchData(this.slug)
    this.incrementReads(this.slug)
  },
  methods: {
    fetchData(slug: string) {
      this.articleStore.fetchDataBySlug(slug)
    },
    incrementReads(slug: string) {
      this.articleStore.incrementReads(slug)
    }
  },
})
</script>

<template>
  <div v-if="this.found">
    <main class="flex flex-col justify-center items-center mt-32">
      <div class="w-6/12">
        <p class="text-3xl text-center">{{ this.articleData.title }} <span class="text-gray-400 text-sm">{{ this.articleData.date }}</span></p>
        <br>
        <img
          :class="'w-auto'"
          :src="'/src/assets/img/articles/' + this.articleStore.data.image"
          :alt="this.articleStore.data.slug"
        >
        <br>
        <p>{{ this.articleData.entry }}</p>
        <br>
        <p>{{ this.articleData.core }}</p>
        <br>
        <p>{{ this.articleData.end }}</p>
        <br>
        <div v-if="this.articleStore.getReadCount(this.slug) == 1">
          <p class="font-light">This is your first time reading this article.</p>
        </div>
        <div v-else>
          <p class="font-light">You have read this article {{ this.articleStore.getReadCount(this.slug) }} times.</p>
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    <div class="text-red-700 text-center mt-32 min-h-screen">
      <p>Article doesn't exist</p>
    </div>
  </div>
</template>

<style scoped></style>
