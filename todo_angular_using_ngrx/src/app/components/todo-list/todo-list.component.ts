import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.model';
import { toggleTodo, removeTodo, addTodo } from '../../store/todo.actions';
import { AppState } from '../../store/app.state';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  selectedTodo:any;
  todos$:Observable<Todo[]>;
  title: string = '';

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select((state: AppState) => state.todos.todos);
    this.todos$.subscribe(todos => this.todos = todos);
    console.log(this.todos);
  }

  addTodo() {
    const newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
    const newTodo: Todo = { id: newId, title: this.title, completed: false };
    console.log(newTodo);
    this.store.dispatch(addTodo({ todo: newTodo }));
    this.title = "";
  }

  toggle(todo: Todo) {
    this.store.dispatch(toggleTodo({ id: todo.id }));
  }

  remove(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
