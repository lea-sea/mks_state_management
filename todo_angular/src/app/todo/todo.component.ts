import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports:[CommonModule]
})
export class TodoComponent {
  @Input() todo!: Todo; // ToDo-Daten werden als Input übergeben
  @Output() toggleComplete = new EventEmitter<void>(); // EventEmitter für Statusänderung
  @Input() isEditing: boolean = false; // Gibt an, ob das ToDo bearbeitet wird
  @Output() editTodo = new EventEmitter<void>(); // Event für den Start der Bearbeitung
  @Output() saveTodo = new EventEmitter<string>(); // Event zum Speichern des Titels
  @Output() cancelEdit = new EventEmitter<void>(); // Event zum Abbrechen der Bearbeitung
  @Output() deleteTodo = new EventEmitter<void>(); // Event zum Löschen des ToDos
  // Methode wird durch Checkbox-Aufruf ausgelöst
  onToggleComplete(): void {
    this.toggleComplete.emit(); // Event wird nach außen gesendet
  }

}