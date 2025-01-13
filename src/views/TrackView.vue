<script lang="ts">
import { defineComponent } from 'vue'
import { useTrackStore } from '@/stores/track.ts'
import CardCalendar from '@/components/CardCalendar.vue'

export default defineComponent({
  name: 'TrackView',
  components: { CardCalendar },
  props: {
    slug: String,
  },
  data() {
    return {
      trackStore: useTrackStore(),
    }
  },
  computed: {
    trackData() {
      return this.trackStore.data
    },
    nextRound() {
      return this.trackStore.next_track
    },
    found() {
      return this.trackStore.found
    }
  },
  mounted() {
    this.fetchData(this.slug)
    this.getNextRound(this.slug)
  },
  methods: {
    fetchData(slug: string) {
      this.trackStore.fetchDataBySlug(slug)
    },
    getNextRound(slug: string) {
      this.trackStore.getNextRound(slug)
    },
  },
  watch: {
    slug(new_slug) {
      this.fetchData(new_slug)
      this.getNextRound(new_slug)
    }
  }
})
</script>

<template>
  <div v-if="this.found">
    <main class="flex flex-col justify-center items-center mt-32 font-formula">
      <div class="flex flex-col w-auto border-2 border-gray-200">
        <p class="p-2 text-2xl bg-red-700 text-center text-white">
          {{ this.trackData.name }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center w-auto h-auto">
          <div class="relative overflow-hidden">
            <img
              :class="'sm:w-24 md:w-64 lg:w-full sm:h-24 md:h-64 lg:h-80'"
              :src="'/src/assets/img/tracks/' + this.trackData.image"
              :alt="this.trackData.slug"
            />
          </div>
          <div class="p-4">
            <p><span class="font-bold">Round:</span> {{ this.trackData.id }}/24</p>
            <p><span class="font-bold">Location:</span> {{ this.trackData.location }}</p>
            <p><span class="font-bold">Date:</span> {{ this.trackData.race_date }}</p>
            <p><span class="font-bold">First Held:</span> {{ this.trackData.first_gp }}</p>
            <p><span class="font-bold">Total Laps:</span> {{ this.trackData.laps }} Laps</p>
            <p><span class="font-bold">Lap Length:</span> {{ this.trackData.length }} Km</p>
            <p><span class="font-bold">Lap Record:</span> {{ this.trackData.record }}</p>
          </div>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p class="text-2xl">
          Next Round
        </p>
        <div class="mt-6 w-full">
          <CardCalendar :data="this.nextRound" />
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    <div class="text-red-700 text-center mt-32 min-h-screen font-formula">
      <p>Track doesn't exist</p>
    </div>
  </div>
</template>

<style scoped></style>
