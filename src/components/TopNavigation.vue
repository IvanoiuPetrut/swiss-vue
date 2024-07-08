<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navbar bg-base-200">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Swiss-App</a>
    </div>
    <nav class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <div class="menu menu-horizontal px-1 hidden md:flex">
          <li>
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
        </div>

        <li class="md:hidden">
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-200 rounded-t-none p-2">
              <li>
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
          </details>
        </li>
      </ul>
    </nav>
  </header>
</template>
