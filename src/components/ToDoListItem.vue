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
  <div class="flex gap-6 items-center">
    <RouterLink
      :to="{ name: 'toDoItem', params: { toDoId: name } }"
      class="text-xl bg-neutral px-2 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-all ease-in-out"
      :class="{ 'bg-red-400': completed, 'bg-error': name == 'Nu fac nimic' }"
    >
      {{ name }}
    </RouterLink>
    <button class="btn btn-xs btn-error" v-if="!completed" @click="$emit('completeTask', name)">
      Delete
    </button>
  </div>
</template>
