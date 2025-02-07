import { Todo } from '../model/todo.model';

export interface AppState {
  todos: TodoState; }

const todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Deploy the App', completed: true }
  ];


  export interface TodoState {
    todos: Todo[];
    selectedTodoId: number | null;
  }
  
  export const initialState: TodoState = {
    todos: todos,
    selectedTodoId: null,
  };