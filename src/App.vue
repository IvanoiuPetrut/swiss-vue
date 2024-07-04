<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <a href=""></a> -->
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'toDoList' }">To Do List</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'posts' }">Posts</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
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
