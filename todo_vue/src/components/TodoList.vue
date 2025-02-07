<template>
  <div id="list">
    <input class="todo-input" v-model="newTodo" @keyup.enter="addTodo" placeholder="Neues Todo eingeben" />
    <button class="add-button" @click="addTodo">Hinzufügen</button>
  </div>
  <div id="list">
    <ul>
      <TodoItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" 
        :isEditing="false"
        @remove="removeTodo(todo.id)" 
        @toggleComplete="toggleComplete(todo.id)"
      />
    </ul> 
  </div> 
  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoItem, { type Todo } from './TodoItem.vue';
import '../assets/main.css';


export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  setup() {
    const todos = ref<Todo[]>([]);
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({
          id: Date.now(),
          text: newTodo.value,
          completed: false,
        });
        newTodo.value = '';
      }
    };

    const removeTodo = (id: number) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const toggleComplete = (id: number) => {
      const todo = todos.value.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    };

    const editTodo = (id: number, value: string) => {
      const todo = todos.value.find(todo => todo.id === id);
      if(todo) {
        todo.text = value
      } 
    };

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      toggleComplete,
      editTodo
    };
  },
});
</script>

<style scoped>
input {
  margin-right: 10px;
}

ul {
list-style-type: none;
}
</style>
