import { Component, OnInit, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule, TodoComponent]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []; // Lokale Kopie der ToDos
  newTodoTitle: string = ''; // Variable für den neuen ToDo-Titel

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Daten vom Service abonnieren
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onAddTodo(): void {
    const title = this.newTodoTitle.trim();
    this.todoService.addTodo(title);
                         //Aktualisiere die Liste
    this.newTodoTitle = ''; // Leere das Eingabefeld
  }

}
