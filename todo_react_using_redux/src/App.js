// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo, updateTodo } from './actions';
import TodoList from './TodoList';
import './App.css'

function App() {
    const todos = useSelector((state) => state); // Zugriff auf den Redux-State
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo(input.trim())); // Dispatch der Action zum Hinzufügen eines To-Dos
        setInput('');
    };

    return (
        <div id='app' >
            <h1>ToDo App mit React und Redux</h1>
            <div id='list'>
                <input className='todo-input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="To-Do eingeben..."
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo(); // Aufruf der Funktion bei Enter
                    }
                }}
            />
            <button className='add-button' onClick={(e)=> handleAddTodo()}>Hinzufügen</button>
            </div>
            
            <TodoList
                todos={todos}
                toggleComplete={(id) => dispatch(toggleComplete(id))}
                deleteTodo={(id) => dispatch(deleteTodo(id))}
                updateTodo={(id, text) => dispatch(updateTodo(id, text))}
            />
        </div>
    );
}

export default App;
