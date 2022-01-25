import React, { useState } from "react";
import todo from "./todoType";
import "../todo.css";

const Todo = (props: todo) => {
  const [todoVal, setTodoVal] = useState(props.todoValue);
  const [isReadOnly, setReadOnly] = useState(true);

  const handleChange = (e: any) => {
    setTodoVal(e.target.value);
  };

  const editTodo = () => {
    setReadOnly(false);
  };

  const deleteItem = () => {
    props.deleteTodo(props.sno);
  };

  const saveChanges = (e: any) => {
    e.preventDefault();
    setReadOnly(true);
  };

  return (
    <li className="todo">
      <span>{props.idx}</span>
      <span>
        <form className="todo-input-field" onSubmit={saveChanges}>
          <input
            type="text"
            value={todoVal}
            readOnly={isReadOnly}
            onChange={handleChange}
          />
        </form>
      </span>
      <span>
        <i onClick={editTodo} className="edit fa fa-pencil"></i>
        <i onClick={deleteItem} className="delete fa fa-trash"></i>
      </span>
    </li>
  );
};

export default Todo;
