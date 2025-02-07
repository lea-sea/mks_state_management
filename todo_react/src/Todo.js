import React, { useState } from 'react';

function Todo({ todo, toggleComplete, deleteTodo, updateTodo }) {
    // Speichern des ursprünglichen Textes
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const initialText = todo.text;  // Speichere den ursprünglichen Wert

    const handleSave = () => {
        updateTodo(todo.id, newText); // Speichern der Änderungen
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
                    type="text"
                    value={newText}
                    onBlur={handleCancel}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSave();
                    }}
                    autoFocus
                    className='editing'
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
