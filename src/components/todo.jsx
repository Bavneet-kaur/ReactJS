import React, { useState } from 'react';

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        { id: 1, task: "Learn React basics" },
        { id: 2, task: "Build a Todo App" },
        { id: 3, task: "Master Lists & Keys" }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        const newTask = {
            id: Date.now(),
            task: input
        };

        setTodos([...todos, newTask]);
        setInput("");
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="m-6 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Task:</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2 rounded"
                        placeholder="Enter your task"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-lime-700 text-white px-4 py-2 rounded hover:bg-lime-900 transition"
                >
                    Add
                </button>
            </form>

            <ul className="list-disc list-inside space-y-2 mt-4">
                {todos.map(todo => (
                    <li key={todo.id} className="text-lg text-gray-700 flex justify-between items-center">
                        {todo.task}
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="ml-4 text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
