<template>
  <div id="list">
    <ul>
        <TodoItem v-for="todo in todos" 
        :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../stores/todostore';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },setup() {
    const todoStore = useTodoStore();

    return {
      todos: todoStore.todos,
    };
  }
});
</script>