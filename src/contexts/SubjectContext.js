import React, { createContext, useReducer } from "react";
import { subjectReducer } from "../reducers/subjectReducer";

export const SubjectContext = createContext();

const SubjectContextProvider = (props) => {
  const [chosenSubject, dispatch] = useReducer(subjectReducer, []);

  return (
    <SubjectContext.Provider value={{ chosenSubject, dispatch }}>
      {props.children}
    </SubjectContext.Provider>
  );
};

export default SubjectContextProvider;
