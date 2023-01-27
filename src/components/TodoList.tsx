import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  todoDelHandler: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  items,
  todoDelHandler,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={todoDelHandler.bind(null, item.id)}>DEL</button>
        </li>
      ))}
    </ul>
  );
};
