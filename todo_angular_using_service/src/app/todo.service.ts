import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a ToDo App', completed: false },
    { id: 3, title: 'Deploy the App', completed: true }
  ];

  private todosSubject = new BehaviorSubject<Todo[]>([]); // Observable-Datenquelle
  todos$: Observable<Todo[]> = this.todosSubject.asObservable(); // Öffentliches Observable

  constructor() {}

  // Aktuelle Liste abrufen
  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  toggleComplete(id: number): void {
    const currentTodos = this.todosSubject.value.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(currentTodos);
  }

  // Fügt ein neues ToDo hinzu, auch wenn der Titel leer ist
  addTodo(title: string): void {
    const currentTodos = this.todosSubject.value;
    const newId = currentTodos.length > 0 ? Math.max(...currentTodos.map(todo => todo.id)) + 1 : 1;

    const newTodo: Todo = { 
      id: newId,
      title :title || ' ', 
      completed: false };
    this.todosSubject.next([...currentTodos, newTodo]); // Zustand aktualisieren
    //this.todos.push(newTodo);
  }


  // Bearbeitet das ToDo mit der angegebenen ID
  updateTodo(id: number, newTitle: string): void {
    const currentTodos = this.todosSubject.value.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    this.todosSubject.next(currentTodos);
  }

  // Löscht ein ToDo
  deleteTodo(id: number): void {
    const currentTodos = this.todosSubject.value;

    // Überprüfen, ob das zu löschende Element existiert
    const updatedTodos = currentTodos.filter(todo => todo.id !== id);
  
    if (updatedTodos.length === currentTodos.length) {
      console.warn(`Todo mit ID ${id} wurde nicht gefunden.`);
    }
  
    // Zustand aktualisieren
    this.todosSubject.next(updatedTodos);
  }
}
