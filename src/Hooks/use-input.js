import React, { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = enteredEmail.trim().includes("@");

 

  return;
};

export default UseInput;
