<script lang="ts">
import { defineComponent } from 'vue'
import ArticleBig from '@/components/ArticleBig.vue'
import ArticleSmall from '@/components/ArticleSmall.vue'
import BigArticles from '../data/big_articles.json'
import SmallArticles from '../data/small_articles.json'

export default defineComponent({
  name: 'HomeView',
  components: { ArticleBig, ArticleSmall },
  data() {
    return {
      big_articles: BigArticles.articles,
      small_articles: SmallArticles.articles,
    }
  }
})
</script>

<template>
  <main>
    <div v-for="article in big_articles" :key="article.id" class="flex items-center justify-center mt-32">
      <ArticleBig :data="article"/>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-60 gap-y-10 place-items-center mt-6 max-w-screen-sm mx-auto">
      <div v-for="article in small_articles" :key="article.id">
        <ArticleSmall :data="article"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
