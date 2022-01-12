import React, { useState } from "react";
import Form from "./Form";

const Todo = () => {
  //
  const [todos, setTodos] = useState([]);

  //
  //
  return (
    <>
      <div className="todo-container">
        <h1>to do list</h1>
        <h2>To do Comp</h2>
        <Form
          onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
        />
      </div>
    </>
  );
};

export default Todo;
