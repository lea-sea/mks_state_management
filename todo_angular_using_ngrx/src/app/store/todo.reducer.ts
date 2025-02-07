import { createReducer, on } from '@ngrx/store';
import { addTodo, updateTodo, toggleTodo, removeTodo, selectTodo } from './todo.actions';
import { initialState } from './app.state';

export const todoReducer = createReducer(
  initialState,
  on(addTodo,  (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }) 
  ),
  on(removeTodo, (state, { id }) =>({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })
  ),
  on(selectTodo, (state, { id }) => ({ ...state, selectedTodoId: id })),
  on(updateTodo, (state, { id, title }) => ({
    ...state,
    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
  }))
);

