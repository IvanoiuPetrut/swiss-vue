import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ToDoListView from "@/views/ToDoListView.vue";
import PostsView from "@/views/PostsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/to-do-list",
      name: "toDoList",
      component: ToDoListView
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsView
    }
  ]
});

export default router;
