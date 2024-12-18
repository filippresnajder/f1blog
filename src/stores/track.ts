import { defineStore } from 'pinia'
import Tracks from '../data/calendar.json'
export const useTrackStore = defineStore({
  id: 'track',
  state: () => ({
    tracks: Tracks.tracks,
    data: {},
    found: false
  }),
  actions: {
    fetchDataBySlug(slug: string) {
      this.data = {}
      for (const track of this.tracks) {
        if (track.slug === slug) {
          this.data = Object.assign({},track)
          this.found = true
          break;
        }
      }
    }
  }
})
