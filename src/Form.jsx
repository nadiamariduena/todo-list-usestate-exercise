import React, { useState } from "react";

//block 1
const useInputValue = (initialState) => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = ({ onSubmit }) => {
  // block 2
  const text = useInputValue("");

  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
      }}
    >
      <input {...text} placeholder="tell me something" />
    </form>
  );
};

export default Form;
