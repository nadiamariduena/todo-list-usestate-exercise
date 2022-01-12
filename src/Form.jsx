import React, { useState } from "react";

const Form = () => {
  //
  const [value, setValue] = useState("");
  //
  return (
    <div>
      <input
        className="form-input"
        placeholder="tell me something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Form;
