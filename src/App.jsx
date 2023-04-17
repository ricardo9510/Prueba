import { useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";


const initialStateTodos = [
    { id: 1, title: "Tomar curso de AWS", completed: true },
    { id: 2, title: "Ir al gimnasio", completed: false },
    { id: 3, title: "Comer", completed: false },
    { id: 4, title: "Trabajar", completed: true },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="bg-sky-200">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
        </div>
    );
};

export default App;
