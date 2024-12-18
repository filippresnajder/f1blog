<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <header>
    <NavigationBar/>
  </header>
  <RouterView/>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<style scoped>
</style>
