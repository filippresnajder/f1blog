import { defineStore } from 'pinia'
import BigArticles from '../data/big_articles.json'
import SmallArticles from '../data/small_articles.json'
export const useArticleStore = defineStore({
  id: 'article',
  state: () => ({
    big_articles: BigArticles.articles,
    small_articles: SmallArticles.articles,
    article_read: JSON.parse(localStorage.getItem('article_read') || '{}'),
    data: {},
    found: false
  }),
  getters: {
    getReadCount: (state) => (slug) => state.article_read[slug] || 0,
  },
  actions: {
    fetchDataBySlug(slug: string) {
      this.data = {}
      this.found = false
      for (const article of this.big_articles) {
        if (article.slug === slug) {
          this.data = Object.assign({},article)
          this.found = true
          break;
        }
      }
      if (!this.found) {
        for (const article of this.small_articles) {
          if (article.slug === slug) {
            this.data = Object.assign({},article)
            this.found = true
            break;
          }
        }
      }
    },
    incrementReads(slug: string) {
      if (!this.found) {
        return
      }
      if (!this.article_read[slug]) {
        this.article_read[slug] = 0
      }
      this.article_read[slug] += 1
      localStorage.setItem('article_read', JSON.stringify(this.article_read))
    }
  }
})
