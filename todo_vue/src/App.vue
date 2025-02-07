<template>
  <div >
    <h1>ToDo App mit Vue</h1>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';
import './assets/main.css';


export default defineComponent({
  name: 'App',
  components: {
    TodoList,
  },
});
</script>
