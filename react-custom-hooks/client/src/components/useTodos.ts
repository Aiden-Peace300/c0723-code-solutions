/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export type UseTodosValues = {
  isLoading: boolean;
  error?: unknown;
  todos?: Todo[];
  addTodo: (todo: UnsavedTodo) => Promise<void>;
  toggleCompleted: (todoId: number) => Promise<void>;
};
/**
 * Manages the Todos by reading from and writing to the backend API,
 * using the API functions below.
 */
export function useTodos(): UseTodosValues {
  const [todos, setTodos] = useState<Todo[]>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await readTodos();
        setTodos(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (todos === undefined) {
      fetchTodos();
    }
  }, [todos]);

  async function addTodo(newTodo: UnsavedTodo): Promise<void> {
    /* TODO: Call the API function that creates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const createdTodo = await createTodo(newTodo); // Create a new todo using the API
      setTodos((prevTodos) =>
        prevTodos ? [...prevTodos, createdTodo] : [createdTodo]
      );
    } catch (err) {
      setError(err);
    }
  }

  async function toggleCompleted(todoId: number): Promise<void> {
    /* TODO: Find the Todo item being updated, toggle its completed prop, and call
     * the API function that updates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * When updating this state, use the updated `todo` returned from the API.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const todoToUpdate = todos?.find((todo) => todo.todoId === todoId);
      if (!todoToUpdate) {
        throw new Error(`Todo with id ${todoId} not found`);
      }

      const updatedTodo = await updateTodo({
        ...todoToUpdate,
        isCompleted: !todoToUpdate.isCompleted,
      }); // Update the todo using the API
      setTodos((prevTodos) =>
        prevTodos?.map((todo) => (todo.todoId === todoId ? updatedTodo : todo))
      );
    } catch (err) {
      setError(err);
    }
  }

  return {
    isLoading: isLoading && todos === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo: UnsavedTodo): Promise<Todo> {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo: Todo): Promise<Todo> {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
