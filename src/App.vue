<script setup>
import { computed, ref, watch, onMounted } from "vue";
import ToDoList from "./components/ToDoList.vue";

const titleForMyToDoList = "My to do list for today";

const firstName = "Alex";
const secondName = "Popescu";

const fullName = computed(() => {
  return firstName + " " + secondName;
});

const question = "Ce este un mar?"; // mar
const correctAnswer = "fruct";
const userAnswer = ref("");
const response = ref("Asta nu e raspunsul bun");

watch(userAnswer, (newAnswer, oldAnswer) => {
  if (newAnswer === correctAnswer) {
    response.value = "Felicitari raspuns corect !!!!";
  } else {
    response.value = "Asta nu e raspunsul bun";
  }
});

const myDiv = ref(null);
const myArray = ref([1, 2, 3, 4]);

onMounted(() => {
  console.log(myDiv.value);
  myDiv.value.innerHTML = "Ceva de la mine";
  console.log(myArray.value);
  myArray.value.push(10);
  console.log(myArray.value);
});
</script>

<template>
  <ToDoList :title="titleForMyToDoList" />
  <p>
    {{ firstName + " " + secondName }}
  </p>
  <p>
    {{ fullName }}
  </p>

  <div>
    <p>{{ question }}</p>
    <div>
      <p>Raspunsul tau: {{ userAnswer }}</p>
      <input type="text" v-model="userAnswer" />
    </div>
    <p>{{ response }}</p>
  </div>

  <div ref="myDiv">DIVUL MEU</div>
</template>

<style scoped></style>
