import React, { createContext, useState } from "react";

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [isSubjectCard, setSubjectCard] = useState(true);

  const toggleSubjectCard = () => {
    setSubjectCard(!isSubjectCard);
  };

  return (
    <CardContext.Provider value={{ isSubjectCard, toggleSubjectCard }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
