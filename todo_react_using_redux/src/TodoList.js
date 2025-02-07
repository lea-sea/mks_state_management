// src/TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList({ todos = [], toggleComplete, deleteTodo, updateTodo }) {
    return (
        <div id='list'>
            <ul>
                {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;
