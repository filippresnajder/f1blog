import { defineStore } from 'pinia'
import Tracks from '../data/calendar.json'
export const useTrackStore = defineStore({
  id: 'track',
  state: () => ({
    tracks: Tracks.tracks,
    data: {},
    next_track: {},
    found: false,
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
    },
    getNextRound(slug: string) {
      this.next_track = Object.assign({}, this.tracks[0]); // Defaultne nastav trať na prvú, to bude v prípade, ak už sme na poslednom kole, takže logicky ďalšia trať nenasleduje.
      let next_track_id = 0
      for (const track of this.tracks) {
        if (track.slug === slug) {
          next_track_id = track.id + 1
        }
        if (track.id === next_track_id) {
          this.next_track = Object.assign({},track)
          break;
        }
      }
    }
  }
})
