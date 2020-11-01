import React, { createContext, useReducer } from "react";
import { scoreReducer } from "../reducers/scoreReducer";

export const ScoreContext = createContext();

const ScoreContextProvider = (props) => {
  const [score, dispatch] = useReducer(scoreReducer, 0);

  return (
    <ScoreContext.Provider value={(score, dispatch)}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
