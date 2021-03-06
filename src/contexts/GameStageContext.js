import React, { createContext, useReducer } from "react";
import { gameStageReducer } from "../reducers/gameStageReducer";

export const GameStageContext = createContext();

const GameStageContextProvider = (props) => {
  const [gameStage, dispatch] = useReducer(gameStageReducer, "intro");

  return (
    <GameStageContext.Provider value={{ gameStage, dispatch }}>
      {props.children}
    </GameStageContext.Provider>
  );
};

export default GameStageContextProvider;
