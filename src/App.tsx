import { useState } from 'react';

import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addItems = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDelHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="app">
      Todo list:
      <NewTodo addItems={addItems} />
      <TodoList items={todos} todoDelHandler={todoDelHandler} />
    </div>
  );
}

export default App;
