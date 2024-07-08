<script setup>
import TopNavigation from "./components/TopNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopNavigation />
  <main class="px-16 py-12">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.alert-succes {
  background-color: greenyellow;
}

.alert-error {
  background-color: red;
}
</style>
