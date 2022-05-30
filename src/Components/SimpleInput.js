import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim().includes("@");

  //   check for the touched state
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  //   check for the entire form validity
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  //   email handlers
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // clear inputs
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  //   setting form classes dynamically
  const inputNameClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
          onBlur={nameInputBlur}
        />
        {nameInputIsInValid && <p>Name must not be empty!!!</p>}
      </div>
      <div className={inputNameClasses}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={emailInputHandler} />
        {nameInputIsInValid && <p>Email must not be empty!!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
