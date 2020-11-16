import React, { createContext, useState } from "react";

export const SuccessContext = createContext();

const SuccessContextProvider = (props) => {
  const [success, setSuccess] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
  };

  const onSuccessEnd = () => {
    setSuccess(false);
  };

  return (
    <SuccessContext.Provider value={{ success, onSuccess, onSuccessEnd }}>
      {props.children}
    </SuccessContext.Provider>
  );
};

export default SuccessContextProvider;
