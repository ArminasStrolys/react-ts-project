import React, { useRef } from 'react';

import './NewTodo.css';

interface TodoItemProps {
  addItems: (todoText: string) => void;
}

export const NewTodo: React.FC<TodoItemProps> = ({ addItems }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    addItems(enteredText);
  };

  return (
    <form className="form-control" onSubmit={todoSubmitHandler}>
      <label>
        Add todo item
        <input type="text" ref={textInputRef} />
      </label>
      <button type="submit">Add todo</button>
    </form>
  );
};
