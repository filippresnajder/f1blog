<script lang="ts">
import { defineComponent } from 'vue'
import { useDriverStore } from '@/stores/driver.ts'
import {useTeamStore} from "@/stores/team.ts";
import CardTeam from "@/components/CardTeam.vue";

export default defineComponent({
  name: 'DriverView',
  components: {CardTeam},
  props: {
    slug: String,
  },
  data() {
    return {
      driverStore: useDriverStore(),
      teamStore: useTeamStore()
    }
  },
  computed: {
    driverData() {
      return this.driverStore.data
    },
    driver_found() {
      return this.driverStore.found
    },
    teamData() {
      return this.teamStore.data
    },
    team_found() {
      return this.teamStore.found
    }
  },
  mounted() {
    this.fetchData(this.slug)
    this.fetchTeamData(this.driverData.team_slug)
  },
  methods: {
    fetchData(slug: string) {
      this.driverStore.fetchDataBySlug(slug)
    },
    fetchTeamData(slug: string)  {
      this.teamStore.fetchDataBySlug(slug)
    }
  },
})
</script>

<template>
  <div v-if="this.driver_found">
    <main class="flex flex-col justify-center items-center mt-20 font-formula">
      <div class="w-6-12 flex flex-col justify-center items-center">
        <p class="text-2xl mt-10">
          Driver Biography
        </p>
        <div class="w-full h-1 bg-red-700 mt-2"></div>
        <p class="max-w-2xl p-4">
          {{ this.driverData.biography }}
        </p>
        <div class="w-80 overflow-hidden border border-gray-200 rounded-md h-auto text-white mt-6">
          <div class="bg-red-700 text-white text-center">
            <h1 class="p-2">
              {{ this.driverData.name }} #{{ this.driverData.number }}
            </h1>
          </div>
          <div class="relative w-full h-72 overflow-hidden">
            <img
              :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
              :src="'/src/assets/img/drivers/' + this.driverData.image"
              :alt="this.driverData.slug"
            >
          </div>
          <div class="p-4 text-black">
            <p>
              Nationality: {{ this.driverData.nationality }}
            </p>
            <p>
              Team: {{ this.driverData.team }}
            </p>
            <p>
              Championships: {{ this.driverData.championships }}
            </p>
            <p>
              Race Starts: {{ this.driverData.starts }}
            </p>
            <p>
              Race Wins: {{ this.driverData.wins }}
            </p>
            <p>
              Pole Positions: {{ this.driverData.poles }}
            </p>
            <p>
              Podiums: {{ this.driverData.podiums }}
            </p>
            <p>
              Points: {{ this.driverData.points }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="this.team_found">
        <div class="w-6-12 flex flex-col justify-center items-center">
          <p class="text-2xl mt-10">
            Driver Team
          </p>
          <div class="w-full h-1 bg-red-700 mt-2"></div>
            <CardTeam :data ="this.teamData"/>
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    <div class="text-red-700 text-center mt-32 min-h-screen font-formula">
      <p>
        Driver doesn't exist
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
