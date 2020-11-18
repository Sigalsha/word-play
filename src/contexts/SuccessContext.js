import React, { createContext, useState } from "react";

export const SuccessContext = createContext();

const SuccessContextProvider = (props) => {
  const [success, setSuccess] = useState(false);
  const [falseGuess, setFalseGuess] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
  };

  const onSuccessEnd = () => {
    setSuccess(false);
  };

  const onFalseGuess = () => {
    setFalseGuess(true);
    setSuccess(false);
  };

  const onFalseGuessEnd = () => {
    setFalseGuess(false);
  };

  return (
    <SuccessContext.Provider
      value={{
        success,
        onSuccess,
        onSuccessEnd,
        onFalseGuessEnd,
        falseGuess,
        onFalseGuess,
      }}
    >
      {props.children}
    </SuccessContext.Provider>
  );
};

export default SuccessContextProvider;
