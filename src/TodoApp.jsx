import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todoApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
  console.log("🚀 ~ file: TodoApp.jsx:6 ~ TodoApp ~ todo:", todo);

  const nextTodo = () => {
    setTodoId((todoId) => todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId((todoId) => todoId - 1);
  };

  return (
    <>
      <h1>TODO - RTK Query</h1>
      <hr />
      <h4>Loading Pokemons: {!isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done " : "Pending "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Prev</button>
      <button onClick={nextTodo}>Next</button>
    </>
  );
};
