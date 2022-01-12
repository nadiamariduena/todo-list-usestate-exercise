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
  //
  return (
    <div>
      <input {...text} className="form-input" placeholder="tell me something" />
    </div>
  );
};

export default Form;
