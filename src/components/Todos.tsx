import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import todo from "./todoType";
import "../todos.css";

let initialTodos: todo[] = [];

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (value: string) => {
    let todoObj = {
      sno: todos.length + 1,
      idx: todos.length,
      todoValue: value,
      deleteTodo: deleteTodo,
    };
    setTodos([...todos, todoObj]);
  };

  const deleteTodo = (snum: number) => {
    const updatedTodos = todos.filter((todo) => todo.sno !== snum);
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos(initialTodos);
  };

  const createTodosArray = () => {
    return todos.map((todo, i) => {
      return (
        <Todo
          key={i}
          idx={i + 1}
          sno={todo.sno}
          todoValue={todo.todoValue}
          deleteTodo={deleteTodo}
        />
      );
    });
  };

  return (
    <div className="todos">
      <header>Todos App</header>
      <AddTodo addTodo={addTodo} />
      <ul>{createTodosArray()}</ul>
      <footer>
        <button onClick={deleteAllTodos} className="clear-all">
          Clear All
        </button>
      </footer>
    </div>
  );
};

export default Todos;
