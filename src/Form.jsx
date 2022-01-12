import React, { useState } from "react";

//block 1
const useInputValue = (initialState) => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    //to remove
    resetValue: () => setValue(""),
  };
};

const Form = ({ onSubmit }) => {
  // block 2
  const { resetValue, ...text } = useInputValue("");

  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} placeholder="tell me something" />
    </form>
  );
};

export default Form;
