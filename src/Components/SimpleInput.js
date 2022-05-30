import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const inputNameRef = useRef("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
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
        {!enteredNameIsValid && <p>Name must not be empty!!!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
