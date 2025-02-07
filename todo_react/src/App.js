// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // Funktion zum Hinzufügen eines To-Dos (beschriftet oder leer)
    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    // Funktionen für die To-Do-Logik
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, text: newText } : todo
        )));
    };

    return (
        <div id='app'>
            <h1>ToDo App mit React</h1>
            <div id='list'>
                <input  className='todo-input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="To-Do eingeben..."
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addTodo(); // Aufruf der Funktion bei Enter
                        }
                    }
                }
            /> 
            <button className='add-button' onClick={(e)=> addTodo()}>Hinzufügen</button>
            </div>
            
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default App;
