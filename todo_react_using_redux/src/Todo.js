// src/Todo.js
import React, { useState } from 'react';

function Todo({ todo, toggleComplete, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(!todo.text); // Falls leer, startet im Bearbeitungsmodus
    const [newText, setNewText] = useState(todo.text);
    const initialText = todo.text;  // Speichere den ursprünglichen Wert

    const handleSave = () => {
        updateTodo(todo.id, newText); // Speichern auch bei leerem Text
        setIsEditing(false);
    };

    const handleCancel = () => {
        setNewText(initialText); // Setze den Text zurück auf den ursprünglichen Wert
        setIsEditing(false);     // Beende den Bearbeitungsmodus
    };

    return (
        <li onDoubleClick={() => setIsEditing(true)}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            {isEditing ? (
                <input
                    className='editing'
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleCancel}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSave();
                    }}
                    autoFocus
                />
            ) : (
                <span className={todo.completed ? "completed" : ""}>
                    {todo.text || '   '}
                </span>
            )}
            {isEditing ? <button onKeyDown={handleCancel}>Abbrechen</button>
                       : <button onKeyDown={() => deleteTodo(todo.id)}>Löschen</button>
            }   
        </li>
    );
}

export default Todo;
