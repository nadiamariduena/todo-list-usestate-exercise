import React, { useState } from "react";

//
const useInputValue = (initialState) => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const Form = () => {
  //
  const text = useInputValue("");
  const email = useInputValue("");

  //
  return (
    <div className="input-container">
      <input {...text} className="form-input" placeholder="tell me something" />
      <input {...email} className="form-input" placeholder="email me" />
    </div>
  );
};

export default Form;
