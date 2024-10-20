import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const { item, saveItem: saveTodos, loading, error } = useLocalStorage('todos', []);
    const [input, setInput] = useState('');
    const completedTodos = item.filter((todo) => !!todo.completed);
    const totalTodos = item.length;
    const searchTodos = item.filter((todo) => todo.title.toLowerCase().includes(input.toLowerCase()));

    const [openModal, setOpenModal] = useState(false);

    const addTodo = (title) => {
        const newTodo = {
            id: Math.random().toString(36).substring(7),
            title,
            completed: false
        }
        saveTodos([...item, newTodo])
    }

    const deleteTodo = (id) => {
        saveTodos(item.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id) => {
        saveTodos(item.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    return (
        <TodoContext.Provider value={{
            item,
            saveItem: saveTodos,
            loading,
            error,
            input,
            setInput,
            completedTodos,
            totalTodos,
            searchTodos,
            deleteTodo,
            completeTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
