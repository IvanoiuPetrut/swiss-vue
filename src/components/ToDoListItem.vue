<script setup>
import { onMounted } from "vue";

defineProps({
  name: String,
  completed: Boolean
});

onMounted(() => {
  console.log("componenta a fost montata");
});
</script>

<template>
  <div>
    <RouterLink :to="{ name: 'toDoItem', params: { toDoId: name } }">
      <span :class="{ 'completed-task': completed, 'wrong-task': name == 'Nu fac nimic' }">{{
        name
      }}</span>
    </RouterLink>
    <button v-if="!completed" @click="$emit('completeTask', name)">Delete</button>
  </div>
</template>

<style scoped>
.completed-task {
  text-decoration: line-through;
}

.wrong-task {
  background-color: red;
}
</style>
