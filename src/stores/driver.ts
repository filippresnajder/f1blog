import { defineStore } from 'pinia'
import AllDrivers from '../data/drivers.json'
export const useDriverStore = defineStore({
  id: 'driver',
  state: () => ({
    drivers: AllDrivers.drivers,
    data: {},
    found: false
  }),
  actions: {
    fetchDataBySlug(slug: string) {
      this.data = {}
      for (const driver of this.drivers) {
        if (driver.slug === slug) {
          this.data = Object.assign({},driver)
          this.found = true
          break;
        }
      }
    }
  }
})
