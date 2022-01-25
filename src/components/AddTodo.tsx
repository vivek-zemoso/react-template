import React, { useState } from "react";
import "../addTodo.css";

const AddTodo = (props: any) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const addTodoInTodos = (e: any) => {
    e.preventDefault();
    props.addTodo(inputVal);
    setInputVal("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={addTodoInTodos}>
        <input
          type="text"
          placeholder="add some value"
          value={inputVal}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
