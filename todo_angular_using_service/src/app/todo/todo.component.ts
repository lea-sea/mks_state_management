import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports:[CommonModule, FormsModule]
})
export class TodoComponent {
  @Input() todo!: Todo;
  isEditing: boolean = false;
  newTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.newTitle = this.todo.title;
  }

  toggleComplete() {
    this.todoService.toggleComplete(this.todo.id);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }

  editTodo() {
    this.isEditing = true;
  }

  saveTodo() {
    if (this.newTitle.trim()) {
      this.todoService.updateTodo(this.todo.id, this.newTitle);
    }
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
    this.newTitle = this.todo.title; // Reset auf ursprünglichen Titel
  }
}