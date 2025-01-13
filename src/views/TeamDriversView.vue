<script lang="ts">
import { defineComponent } from 'vue'
import { useTeamStore } from '@/stores/team.ts'
import CardDriver from '@/components/CardDriver.vue'
import TeamInfo from "@/components/TeamInfo.vue";

export default defineComponent({
  name: 'TeamDriversView',
  components: {TeamInfo, CardDriver },
  props: {
    slug: String,
  },
  data() {
    return {
      team: useTeamStore(),
    }
  },
  computed: {
    teamData() {
      return this.team.data
    },
    teamDrivers() {
      return this.team.team_drivers
    },
  },
  mounted() {
    this.fetchData(this.slug)
    this.fetchDrivers(this.slug)
  },
  methods: {
    fetchData(slug: string) {
      this.team.fetchDataBySlug(slug)
    },
    fetchDrivers(slug: string) {
      this.team.getTeamDrivers(slug)
    },
  },
})
</script>

<template>
  <main class="flex flex-col justify-center items-center mt-20 font-formula">
    <div class="w-6/12 flex flex-col justify-center items-center">
      <p class="text-2xl mt-10">Team Drivers</p>
      <div class="w-full max-w-xl h-1 bg-red-700 mt-2"></div>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 place-items-center mt-6 max-w-screen-lg mx-auto">
      <div v-for="driver in this.teamDrivers" :key="driver.id">
        <CardDriver :data="driver" />
      </div>
    </div>
    <div>
      <p class="text-center mt-14 text-2xl">Team information</p>
      <div class="w-full max-w-xl h-1 bg-red-700 mt-2"></div>
      <TeamInfo :data="this.teamData"/>
    </div>
    <span class="mt-24"></span>
  </main>
</template>

<style scoped></style>
