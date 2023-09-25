/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
/* eslint-disable @typescript-eslint/no-empty-function -- Remove me */
// import { useState } from 'react';
import PageTitle from './components/PageTitle';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useTodos } from './components/useTodos.ts';

export default function App() {
  // TODO: Use the custom hook here instead of state and functions
  const { todos, isLoading, error, addTodo, toggleCompleted } = useTodos();

  if (error) {
    console.error('Fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          {isLoading && <div>Loading...</div>}
          {!isLoading && todos && (
            <TodoList todos={todos} toggleCompleted={toggleCompleted} />
          )}
        </div>
      </div>
    </div>
  );
}
