<script setup>
import { ref, onMounted } from "vue";
import ToDoListItem from "./ToDoListItem.vue";

defineProps(["title"]);

const taskText = ref("");
const tasks = ref([]);
const completedTasks = ref([]);

function addTask() {
  if (taskText.value === "") {
    return;
  }
  tasks.value.push(taskText.value);

  localStorage.setItem("tasks", JSON.stringify(tasks.value));

  taskText.value = "";
}

function completeTask(taskName) {
  for (let i = 0; i <= tasks.value.length; i++) {
    if (tasks.value[i] === taskName) {
      if (!completedTasks.value.includes(taskName)) {
        completedTasks.value.push(taskName);
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks.value));
      }
    }
  }
}

function isTaksCompleted(task) {
  return completedTasks.value.includes(task);
}

onMounted(() => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  const completedTasksFromLocalStorage = JSON.parse(localStorage.getItem("completedTasks"));

  if (tasksFromLocalStorage) {
    tasks.value = tasksFromLocalStorage;
  }

  if (completedTasksFromLocalStorage) {
    completedTasks.value = completedTasksFromLocalStorage;
  }
});
</script>

<template>
  <h1>{{ title }}</h1>

  <p>All tasks: {{ tasks }}</p>
  <p>Completed tasks: {{ completedTasks }}</p>
  <input type="text" v-model="taskText" @keyup.enter="addTask" />
  <button @click="addTask">Add</button>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <ToDoListItem :name="task" :completed="isTaksCompleted(task)" @complete-task="completeTask" />
    </li>
  </ul>
</template>

<style scoped></style>
