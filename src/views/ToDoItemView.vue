<script setup>
defineProps(["toDoId"]);
</script>
<template>
  <h1 class="text-3xl font-bold text-center my-4">Your to do is {{ toDoId }}</h1>
</template>
