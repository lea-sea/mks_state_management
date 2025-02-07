import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

// Aktionen definieren
export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ id: number, title: string }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ id: number }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
export const selectTodo = createAction('[Todo] Select Todo', props<{ id: number }>());
