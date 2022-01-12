## To-do List - UseState exercise 🍨

<br>
<br>

### Start by setting up the Form component

<br>

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

<br>
<br>

# 🌈

#### But there is another way of doing it (in case you have more inputs)

<br>

- CReate a function on top of the component , then add the state inside that new function

<br>

- To this new function will have a **initialState** for **argument**, that you will be passing inside the useState , like so **useState(initialState)**

```javascript
const useInputValue = (initialState) => {
  const [value, setValue] = useState(initialState);
};
```

##### Then you will pass the line of code related to the target.value that was inside the _INPUT box_, and you will return it

```javascript
// before
return {
 value={value}
        onChange={(e) => setValue(e.target.value)

}
// after you included it inside the useInputValue
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
```

##### Now lets assign the 'value' to the new function

```javascript
// before
const [value, setValue] = useState("");

// after
const text = useInputValue("");
```

<br>

#### Now instead of passing this like that:

```javascript
<input
  className="form-input"
  placeholder="tell me something"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

#### Do this:

- the **...** the spread operator is going to grab all the data we have inside the **text**, which is the data coming from the **useInputValue()**

```javascript
<input className="form-input" placeholder="tell me something" {...text} />
```

<br>

```javascript
// BEFORE
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

//
//
//
//
//
//
//     AFTER

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

```
