import React, { useState } from "react";
import Form from "./Form";

const Todo = () => {
  //
  const [todos, setTodos] = useState([]);

  //

  //
  return (
    <>
      {" "}
      <div className="todo-container">
        <h1>to do list</h1>
        <h2>Good Vibes!!</h2>
        <Form
          onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
        />
      </div>{" "}
      <div>
        {todos.map(({ text }) => (
          <div key={text} className="todo-result">
            <p>{text}</p>
          </div>
        ))}
      </div>
      <button className="btn-card" type="button" onClick={() => setTodos([])}>
        clear
      </button>{" "}
    </>
  );
};

export default Todo;
