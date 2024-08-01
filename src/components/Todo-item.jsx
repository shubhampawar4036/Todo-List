import React from 'react';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          className="mr-2"
        />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {title}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </li>
  );
}
