<script lang="ts">
import { defineComponent } from 'vue'
import TeamData from '../data/teams.json'
import CardTeam from '@/components/CardTeam.vue'

export default defineComponent({
  name: 'TeamView',
  components: { CardTeam },
  data() {
    return {
      teams: TeamData.teams,
    }
  },
})
</script>

<template>
  <main class="grid md:grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10 place-items-center mt-32 max-w-screen-sm mx-auto">
    <div v-for="team in teams" :key="team.id">
      <CardTeam :data="team" />
    </div>
  </main>
</template>

<style scoped></style>
