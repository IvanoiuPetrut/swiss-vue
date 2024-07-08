<script setup>
import TopNavigation from "./components/TopNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopNavigation />
  
  <RouterView></RouterView>
</template>

<style scoped>
.alert-succes {
  background-color: greenyellow;
}

.alert-error {
  background-color: red;
}
</style>
