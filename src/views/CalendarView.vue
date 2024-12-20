<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from '../data/calendar.json'
import CardCalendar from '@/components/CardCalendar.vue'

export default defineComponent({
  name: 'CalendarView',
  components: { CardCalendar },
  data() {
    return {
      tracks: Calendar.tracks,
    }
  },
})
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-10 place-items-center mt-32 max-w-screen-lg mx-auto">
    <div
      v-for="track in tracks"
      :key="track.id"
    >
      <CardCalendar :data="track" />
    </div>
  </div>
</template>

<style scoped>
</style>
