import React, { createContext, useReducer } from "react";
import { gameStageReducer } from "../reducers/gameStageReducer";

export const GameStageContext = createContext();

// change this to not include reducer!

const GameStageContextProvider = (props) => {
  const [gameStage, dispatch] = useReducer(gameStageReducer, "intro");
  console.log(gameStage);

  return (
    <GameStageContext.Provider value={{ gameStage, dispatch }}>
      {props.children}
    </GameStageContext.Provider>
  );
};

export default GameStageContextProvider;
