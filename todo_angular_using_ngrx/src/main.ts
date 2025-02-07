import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './app/store/todo.reducer';

bootstrapApplication(AppComponent,{
  providers: [
    provideStore({ todos: todoReducer }) // Hier wird der Reducer registriert
  ],
}).catch((err) => console.error(err));
