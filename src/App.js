import "./App.css";
import Intro from "./views/Intro";
import SelectSubject from "./views/SelectSubject";
import PlayGame from "./views/PlayGame";
import CardContextProvider from "./contexts/CardContext";
import { useContext, useState } from "react";
import ScoreContextProvider from "./contexts/ScoreContext";
import { GameStageContext } from "./contexts/GameStageContext";

function App() {
  const { gameStage } = useContext(GameStageContext);

  return (
    <div className="App">
      {gameStage}
      {gameStage === "intro" && <Intro />}
      {gameStage === "selectSubject" && <SelectSubject />}
      {gameStage === "playGame" && (
        <ScoreContextProvider>
          <PlayGame />
        </ScoreContextProvider>
      )}
    </div>
  );
}

// gameStage === "selectSubject"
// gameStage === "playGame"

// onClick={() => dispatch({ type: "SELECT_SUBJECT" })}
// onClick={() => dispatch({ type: "PLAY_GAME" })}

export default App;
