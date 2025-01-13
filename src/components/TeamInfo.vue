<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TeamInfo",
  props: {
    data: Object,
  }
})
</script>

<template>
  <div class="font-formula text-sm p-4 text-black">
    <p>
      <span class="font-bold">Based in:</span> {{ this.data.base }}
    </p>
    <p>
      <span class="font-bold">Championships:</span> {{ this.data.championships }}
    </p>
    <p>
      <span class="font-bold">Race Starts:</span> {{ this.data.starts }}
    </p>
    <p>
      <span class="font-bold">Race Wins:</span> {{ this.data.wins }}
    </p>
    <p>
      <span class="font-bold">Pole Positions:</span> {{ this.data.poles }}
    </p>
    <p>
      <span class="font-bold">Podiums:</span> {{ this.data.podiums }}
    </p>
    <p>
      <span class="font-bold">Points:</span> {{ this.data.points }}
    </p>
    <p>
      <span class="font-bold">2024 Position:</span> {{ this.data.ly_pos }}
    </p>
  </div>
</template>

<style scoped>

</style>
