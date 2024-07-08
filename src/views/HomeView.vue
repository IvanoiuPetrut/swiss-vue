<script setup>
import { useCounterStore } from "../stores/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <h1>This is the home page</h1>
  <p>Count: {{ counterStore.count }}</p>
  <p>Double count {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment()">Increment</button>
</template>
