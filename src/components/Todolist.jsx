import React from 'react';
import { TodoItem } from "./Todo-item";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list-none p-0">
      {todos.length === 0 && (
        <li className="text-center text-gray-500">No Todos</li>
      )}
      {todos.map(todo => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
