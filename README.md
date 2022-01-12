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

<br>

<br>

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

<br>

#### As I said, we use this {...text} when we have different input fields

- For example we can add another, this time we can add **email**

```javascript
const Form = () => {
  //
  const text = useInputValue("");
  const email = useInputValue("");

  //
  return (
    <div>
      <input {...text} className="form-input" placeholder="tell me something" />
      // //
      <input
        {...email}
        className="form-input"
        placeholder="tell me something"
      />
    </div>
  );
};
```

<br>
<br>

# 🍊

### Now lets add the onSubmit event

> The onsubmit event is an event that occurs when you try to submit a form.

```javascript
 onSubmit={(e) => e.preventDefault()
```

> The e in e. preventDefault prevents the default action when a link is clicked, which is the page refreshing or changing. **So it allows for behavior such as clicking on a link making a call to the database without a page refresh**.

<br>

##### Now pass the ({onSubmit}) prop here:

```javascript
const Form = ({onSubmit}) => {
  //


```

<br>

#### This onSubmit is going to help to pass the data from block 1 to block 2

```javascript
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
      }}
      className="input-container"
    >
      <input {...text} className="form-input" placeholder="tell me something" />
    </form>
  );
};

export default Form;
```

#### GRab the value from block 1 and pass it to block 2, using the text, through the onSubmit
