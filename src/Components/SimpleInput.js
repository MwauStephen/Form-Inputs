import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const inputNameRef = useRef("");

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("name input is valid");
    }
  }, [enteredNameIsValid]);
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

  //   setting form classes dynamically
  const inputNameClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
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
