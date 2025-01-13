import { defineStore } from 'pinia'
import AllTeams from '../data/teams.json'
import AllDrivers from '../data/drivers.json'
export const useTeamStore = defineStore({
  id: 'team',
  state: () => ({
    teams: AllTeams.teams,
    drivers: AllDrivers.drivers,
    data: {},
    team_drivers: [] as Array<any>,
    found: false
  }),
  actions: {
    fetchDataBySlug(slug: string) {
      this.data = {}
      for (const team of this.teams) {
        if (team.slug === slug) {
          this.data = Object.assign({},team)
          this.found = true
          break;
        }
      }
    },
    getTeamDrivers(slug: string) {
      this.team_drivers = this.drivers.filter(driver => driver.team_slug === slug);
    }
  }
})
