import React, { useState } from "react";
import UseInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: restInputName,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: restInputEmail,
  } = UseInput((value) => value.includes("@"));

 
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes("@");

  //   check for the touched state

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  //   check for the entire form validity
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //   email handlers
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    // clear  name inputs
    restInputName("");

    // clear email inputs
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  //   setting form name classes dynamically
  const inputNameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  // setting form email classes dynamically
  const inputEmailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p>Name must not be empty!!!</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p>Please enter a valid email!!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
