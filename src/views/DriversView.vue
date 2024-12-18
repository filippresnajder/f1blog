<script lang="ts">
import { defineComponent } from 'vue'
import DriverData from '../data/drivers.json'
import CardDriver from '@/components/CardDriver.vue'

export default defineComponent({
  name: 'DriverView',
  components: { CardDriver },
  data() {
    return {
      drivers: DriverData.drivers
    }
  }
})
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-32 gap-y-10 place-items-center mt-32 max-w-screen-lg mx-auto">
    <div v-for="driver in drivers" :key="driver.id">
      <CardDriver :data="driver"/>
    </div>
  </div>
</template>

<style scoped>
</style>
