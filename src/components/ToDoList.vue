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
  <div>
    <h1 class="text-3xl font-bold text-center my-4">{{ title }}</h1>

    <div class="flex flex-col gap-2">
      <label for="to-do-input" class="text-xl opacity-80">Enter a to do:</label>
      <div>
        <input
          type="text"
          class="input input-sm input-bordered w-48 mr-4"
          id="to-do-input"
          v-model="taskText"
          @keyup.enter="addTask"
        />
        <button class="btn btn-sm btn-primary" @click="addTask">Add</button>
      </div>
    </div>

    <ul class="mt-8 flex flex-col gap-4">
      <li v-for="(task, index) in tasks" :key="index">
        <ToDoListItem
          :name="task"
          :completed="isTaksCompleted(task)"
          @complete-task="completeTask"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
