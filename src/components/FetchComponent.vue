<script setup>
import { ref } from "vue";
import BlogPost from "./BlogPost.vue";
//https://jsonplaceholder.typicode.com/

const posts = ref(null);

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Error fetching data:", error); //
  }
}

// ! Axios

async function fetchDataAxios(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// ! Sequential

// async function fetchDataSequentially() {
//   try {
//     const response1 = await fetch('https://api.example.com/data1');
//     const data1 = await response1.json();
//     console.log('Data 1:', data1);

//     const response2 = await fetch('https://api.example.com/data2');
//     const data2 = await response2.json();
//     console.log('Data 2:', data2);

//     const response3 = await fetch('https://api.example.com/data3');
//     const data3 = await response3.json();
//     console.log('Data 3:', data3);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// ! Parallel

// async function fetchDataInParallel() {
//   try {
//     const [response1, response2, response3] = await Promise.all([
//       fetch("https://api.example.com/data1"),
//       fetch("https://api.example.com/data2"),
//       fetch("https://api.example.com/data3")
//     ]);

//     const data1 = await response1.json();
//     const data2 = await response2.json();
//     const data3 = await response3.json();

//     console.log("Data 1:", data1);
//     console.log("Data 2:", data2);
//     console.log("Data 3:", data3);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
</script>

<template>
  <div>
    <button @click="fetchData">Get posts</button>
  </div>
  <div v-if="posts">
    <!-- {{ posts }} -->
    <BlogPost v-for="post in posts" :key="post.id">
      <template #heading> {{ post.title }} </template>

      <template #content>
        {{ post.body }}
      </template>
    </BlogPost>
  </div>
  <div v-else>No posts yet, try to click the button</div>
</template>
