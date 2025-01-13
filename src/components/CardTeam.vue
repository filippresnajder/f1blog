<script lang="ts">
import { defineComponent } from 'vue'
import TeamInfo from "@/components/TeamInfo.vue";

export default defineComponent({
  name: 'CardTeam',
  components: {TeamInfo},
  props: {
    data: Object,
  }
})
</script>

<template>
  <router-link :to="{ name: 'team_drivers', params: { slug: this.data.slug }}">
    <div class="grid grid-cols-1 place-items-center mt-6">
        <div class="w-80 overflow-hidden border border-gray-200 rounded-md h-auto text-white">
          <div class="bg-red-700 text-white text-center">
            <h1 class="font-formula p-2">
              {{ this.data.name }}
            </h1>
          </div>
          <div class="relative w-full h-72 overflow-hidden">
            <img
              :class="'absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'"
              :src="'/src/assets/img/teams/' + this.data.image"
              :alt="this.data.slug"
            >
          </div>
          <TeamInfo :data="this.data"/>
        </div>
      </div>
    </router-link>
</template>

<style scoped>
</style>
