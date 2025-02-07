import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeTodo, selectTodo, toggleTodo, updateTodo } from '../../store/todo.actions';
import { Todo } from '../../model/todo.model';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() 
  todo!: Todo; // Optional, falls ein spezifisches Todo abgerufen wird
  isEditing: boolean = false;  // Flag, um zu erkennen, ob im Bearbeitungsmodus
  newTitel: string = ''; // Temporäre Variable für den bearbeiteten Titel

  constructor(private store:Store<AppState>) {
  }

  toggleCompletion() {
    this.store.dispatch(toggleTodo({ id: this.todo.id }));
  }

  // Wenn das Todo doppelt angeklickt wird, gehe in den Bearbeitungsmodus
  editTodo() {
    this.isEditing = true;
    this.newTitel = this.todo.title;  // Initialisiere den Titel mit dem aktuellen Wert
  }

  // Speichern der Änderungen (Enter oder beim Verlassen des Eingabefeldes)
  saveTodo() {
    if (this.newTitel.trim()) {
      this.store.dispatch(updateTodo({ id: this.todo.id, title: this.newTitel }));
    }
    this.isEditing = false;
  }

  // Abbrechen der Bearbeitung (Esc-Taste)
  cancelEditing() {
    this.isEditing = false;
    this.newTitel = this.todo.title;
  }

  deleteTodo(){
    this.store.dispatch(removeTodo({ id: this.todo.id}));
  }
}
