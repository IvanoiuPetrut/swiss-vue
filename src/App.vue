<script setup>
import { RouterView, RouterLink } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router);

function goToAbout() {
  router.push({ name: "about" });
}
</script>

<template>
  <header>
    <nav>
      <button @click="goToAbout">Go to about</button>
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

        <li>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
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
