<template>
  <li v-on:dblclick="startEditing">
    <input 
      type="checkbox"  
      :checked="todo.completed"
      @change="$emit('toggleComplete')" 
      />
      <span :class="{ completed: todo.completed }" v-if="!isEditing">
        {{ todo.text }}
      </span>
      <input v-else
          type="text"
          v-model="editedText"
          @keypress.enter="saveEdit"
          @blur="cancelEdit"
      />      
    <button v-if="!isEditing" @click="$emit('remove')">Löschen</button>
    <button v-else @click="cancelEdit">Abbrechen</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import '../assets/main.css';


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
    isEditing: {
      type: Boolean,
      required: true
    }
  },
  emits: ['updateTodo', 'toggleComplete', 'remove'],
  setup(props, { emit }) {
    const isEditing = ref(false);
    const editedText = ref(props.todo.text);

    const startEditing = () => {
      isEditing.value = true;
      editedText.value = props.todo.text; // Setze den aktuellen Text
    };

    const saveEdit = () => {
      if (editedText.value.trim()) {
        emit('updateTodo', props.todo.id, editedText.value.trim());
      }
      isEditing.value = false;
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    watch(() => props.todo.text, (newText) => {
      editedText.value = newText; // Sync mit externen Änderungen
    });

    return { isEditing, editedText, startEditing, saveEdit, cancelEdit };
  }
});
</script>

