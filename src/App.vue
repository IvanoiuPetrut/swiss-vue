<script setup>
import { computed, ref, watch, onMounted } from "vue";
import ToDoList from "./components/ToDoList.vue";
import BaseAlert from "./components/BaseAlert.vue";
import FancyButton from "./components/FancyButton.vue";
import BlogPost from "./components/BlogPost.vue";

import FetchComponent from "./components/FetchComponent.vue";

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
  <FetchComponent />

  <FancyButton> </FancyButton>

  <BlogPost>
    <template #heading> Titlul postului </template>

    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias nostrum laboriosam
      recusandae libero quibusdam, fugit sapiente ipsum laudantium sequi accusamus at sit non
      impedit quis doloribus reiciendis amet. Incidunt!
    </template>
  </BlogPost>

  <BlogPost>
    <template #heading> Alt titlu </template>

    <template #content> O descriere mai scrututza. </template>
  </BlogPost>

  <BaseAlert :content="'Felicitari ai schimbat parola cu succes'" class="alert-succes" />
  <BaseAlert :content="'Parola trebuie sa aiba minim 12 caractere'" class="alert-error" />
  <ToDoList :title="titleForMyToDoList" class="my-class" id="to-do-list" />
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

<style scoped>
.alert-succes {
  background-color: greenyellow;
}

.alert-error {
  background-color: red;
}
</style>
