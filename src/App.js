// src/App.js
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">シンプルTodoアプリ</h1>

      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2 rounded"
          placeholder="新しいタスクを入力"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2"
          >
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;