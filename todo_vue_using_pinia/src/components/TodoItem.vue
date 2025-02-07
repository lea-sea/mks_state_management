<template>
  <li @dblclick="startEditing"  >
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo"
      />
      <span v-if="!isEditing" :class="{ completed: todo.completed }">{{ todo.titel }}</span>
      <input
        v-else
        type="text"
        v-model="editableTitle"
        @blur="cancelEdit"
        @keypress.enter="saveTodo"
      />
      <button v-if="!isEditing" @click="deleteTodo">Löschen</button>
      <button v-else @click="cancelEdit">Abbrechen</button>
  </li>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from 'vue';
import { type Todo, useTodoStore } from '../stores/todostore';

export default defineComponent({
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },
  setup(props) {
    const todoStore = useTodoStore();
    const isEditing = ref(false);
    const editableTitle = ref(props.todo.titel);

    watch(
      () => props.todo.titel,
      (newTitle) => {
        editableTitle.value = newTitle;
      }
    );

    const startEditing = () => {
      isEditing.value = true;
      editableTitle.value = props.todo.titel;
    };

    const saveTodo = () => {
      isEditing.value = false;
      todoStore.updateTodo(props.todo.id, editableTitle.value.trim());
    };

    const toggleTodo = () => {
      todoStore.toggleTodo(props.todo.id);
    };

    const cancelEdit = () => {
      isEditing.value = false;
      editableTitle.value = props.todo.titel;
    };

    const deleteTodo = () => {
      todoStore.deleteTodo(props.todo.id)
    };

    return {
      isEditing,
      editableTitle,
      startEditing,
      saveTodo,
      toggleTodo,
      cancelEdit, 
      deleteTodo
    };
  },
});
</script>
