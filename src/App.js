import "./App.css";
import Intro from "./views/Intro";
import SelectSubject from "./views/SelectSubject";
import PlayGame from "./views/PlayGame";
import CardContextProvider from "./contexts/CardContext";
import { useState } from "react";
import ScoreContextProvider from "./contexts/ScoreContext";

function App() {
  const [gameStage, setGameStage] = useState("intro");

  return (
    <div className="App">
      {gameStage}
      {gameStage === "intro" && (
        <Intro onClick={() => setGameStage("selectSubject")} />
      )}
      {gameStage === "selectSubject" && (
        <SelectSubject onClick={() => setGameStage("playGame")} />
      )}
      {gameStage === "playGame" && (
        <ScoreContextProvider>
          <PlayGame onClick={() => setGameStage("intro")} />
        </ScoreContextProvider>
      )}
    </div>
  );
}

export default App;
