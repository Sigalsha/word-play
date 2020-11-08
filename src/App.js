import "./App.css";
import Intro from "./views/Intro";
import SelectSubject from "./views/SelectSubject";
import PlayGame from "./views/PlayGame";
import CardContextProvider from "./contexts/CardContext";
import { useContext, useState } from "react";
import ScoreContextProvider from "./contexts/ScoreContext";
import GameStageContextProvider, {
  GameStageContext,
} from "./contexts/GameStageContext";

function App() {
  const { gameStage, dispatch } = useContext(GameStageContext);

  return (
    <div className="App">
      <GameStageContextProvider>
        <Intro />
        {gameStage === "selectSubject" && (
          <SelectSubject onClick={() => dispatch({ type: "SELECT_SUBJECT" })} />
        )}
        {gameStage === "playGame" && (
          <ScoreContextProvider>
            <PlayGame onClick={() => dispatch({ type: "PLAY_GAME" })} />
          </ScoreContextProvider>
        )}
      </GameStageContextProvider>
    </div>
  );
}

export default App;
