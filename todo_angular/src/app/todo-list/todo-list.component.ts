import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports:[TodoComponent, CommonModule, FormsModule]
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  editingTodoId: number | null = null;
  editingTitle: string = '';
  nextId: number = 1; // Automatische ID-Vergabe

  // Neues ToDo hinzufügen
  onAddTodo(): void {
    const title = this.newTodoTitle.trim();
    this.todos.push(new Todo(this.nextId++, title));
    this.newTodoTitle = '';
  }

  // ToDo bearbeiten (Doppelklick)
  onEditTodo(todo: Todo): void {
    this.editingTodoId = todo.id;
    this.editingTitle = todo.title;
  }

  // Bearbeitung speichern
  onSaveEdit(todo: Todo, updatedTitle: string): void {
    if (updatedTitle.trim()) {
      todo.title = updatedTitle; // Aktualisiert den Titel
      this.editingTodoId = null; // Beendet den Bearbeitungsmodus
    }
  }

  onCancelEdit(): void {
    this.editingTodoId = null; // Bricht die Bearbeitung ab
  }

  // ToDo löschen
  onDeleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // ToDo als erledigt markieren
  onToggleComplete(todo: Todo): void {
    const foundTodo = this.todos.find((t) => t.id === todo.id);
    if (foundTodo) {
      foundTodo.completed = !foundTodo.completed;
    }
  }

  
}
