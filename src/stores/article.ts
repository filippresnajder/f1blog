import { defineStore } from 'pinia'
import Articles from '../data/articles.json'
export const useArticleStore = defineStore({
  id: 'article',
  state: () => ({
    articles: Articles.articles,
    article_read: JSON.parse(localStorage.getItem('article_read') || '{}'),
    data: {},
    nextArticle: {},
    found: false
  }),
  getters: {
    getReadCount: (state) => (slug: string) => state.article_read[slug] || 0,
  },
  actions: {
    fetchDataBySlug(slug: string) {
      this.data = {}
      this.found = false
      for (const article of this.articles) {
        if (article.slug === slug) {
          this.data = Object.assign({},article)
          this.found = true
          break;
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
    },
    getNextArticle(slug: string) {
      this.nextArticle = Object.assign({}, this.articles[0]); // Defaultne nastav article na prvý
      let next_article_id = 0
      for (const article of this.articles) {
        if (article.slug === slug) {
          next_article_id = article.id + 1
        }
        if (article.id === next_article_id) {
          this.nextArticle = Object.assign({},article)
          break;
        }
      }
    }
  }
})
