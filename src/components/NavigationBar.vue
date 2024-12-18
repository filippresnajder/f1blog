<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavigationBar'
})
</script>

<template>
  <nav class="fixed top-0 w-full bg-red-900 z-50">
    <div class="flex flex-col items-center justify-center">
      <router-link :to="{name: 'home'}">
        <img class="w-24"
             src="../assets/img/f1-logo.jpg"
             alt="f1logo"
        >
      </router-link>
      <div class="flex items-center justify-center w-full bg-red-700">
        <ul class="flex gap-10 text-white uppercase font-medium">
          <li class="py-2">
            <router-link :to="{name: 'home'}">
              Home
            </router-link>
          </li>
          <li class="py-2">
            <router-link :to="{name: 'drivers'}">
              Drivers
            </router-link>
          </li>
          <li class="py-2">
            <router-link :to="{name: 'teams'}">
              Teams
            </router-link>
          </li>
          <li class="py-2">
            <router-link :to="{name: 'calendar'}">
              Calendar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
