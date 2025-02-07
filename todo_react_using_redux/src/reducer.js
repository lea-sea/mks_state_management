// src/reducer.js
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, UPDATE_TODO } from './actions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_COMPLETE:
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case UPDATE_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        default:
            return state;
    }
};

export default todoReducer;
