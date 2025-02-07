import { defineStore } from 'pinia'
import { title } from 'process';

export interface Todo {
  id: number;
  titel: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(title: string) {
      const trimmedTitle = title.trim();
      const finalTitle = trimmedTitle || ' ';
      this.todos.push({ id: Date.now(), titel: finalTitle, completed: false });
    },
    updateTodo(id: number, title: string) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.titel = title;
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(id:number){
      const todo = this.todos.find((todo) => todo.id === id);
      let index = this.todos.indexOf(todo!);
      this.todos.splice(index, 1);
    }
  },
});