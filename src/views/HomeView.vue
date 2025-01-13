<script lang="ts">
import { defineComponent } from 'vue'
import ArticleBig from '@/components/ArticleBig.vue'
import ArticleSmall from '@/components/ArticleSmall.vue'
import Articles from '../data/articles.json'

export default defineComponent({
  name: 'HomeView',
  components: { ArticleBig, ArticleSmall },
  data() {
    return {
      articles: Articles.articles,
    }
  },
  computed: {
    smallArticles() {
      return this.articles.filter(article => article.size === 'small')
    },
    bigArticles() {
      return this.articles.filter(article => article.size === 'big')
    }
  }
})
</script>

<template>
  <main>
    <div
      v-for="article in bigArticles"
      :key="article.id"
      class="flex flex-col items-center"
    >
      <div
        v-if="article.size == 'big'"
        class="min-w-80 w-6/12 max-w-3xl mt-32"
      >
        <ArticleBig :data="article" />
      </div>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-60 gap-y-10 place-items-center mt-6 max-w-screen-sm mx-auto">
        <div
          v-for="article in smallArticles"
          :key="article.id"
        >
         <div v-if="article.size == 'small'">
           <ArticleSmall :data="article"/>
         </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
</style>
