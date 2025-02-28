import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TodoListComponent } from '../todo-list/todo-list.component'; // Importiere die Komponente
import { TodoComponent } from '../todo/todo.component'; // Falls erforderlich
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    TodoListComponent, 
    TodoComponent, 
    AppComponent, 
    FormsModule,
    NgModule,
    CommonModule
  ]
})
export class AppModule { }
