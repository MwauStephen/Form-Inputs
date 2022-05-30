import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const inputNameRef = useRef("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      return;
    }
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue);
    console.log(enteredName);
    // clear inputs
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
