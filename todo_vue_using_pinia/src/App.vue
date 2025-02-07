<template>
  <div>
    <h1>Todo App mit Vue und Pinia</h1>
    <div id="list">
      <input class="todo-input"
      v-model="newTodoTitle" 
      placeholder="ToDo eingeben (optional)" 
      @keyup.enter="addTodo" 
    />
    <button class="add-button" @click="addTodo">Hinzufügen</button>
    </div>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTodoStore } from './stores/todostore';
import TodoList from './components/TodoList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TodoList },
  setup() {
    const todoStore = useTodoStore();
    const newTodoTitle = ref('');

    const addTodo = () => {
      const title = newTodoTitle.value.trim()
      todoStore.addTodo(title);
      newTodoTitle.value = '';
    };

    return {
      addTodo,
      newTodoTitle,
    };
  },
});
</script>
