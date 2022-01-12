## To-do List - UseState exercise

<br>

## Start by setting up the Form component

- Here is where the user will type the data: **useState("")**

- This **useState("")** correspond to the value

<br>

> **(e.target.value)}** A single value that is the target of a matching process. A matching engine compares a source value to a target value to determine whether or not there is a source-to-target match.

<br>

```javascript
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
```
