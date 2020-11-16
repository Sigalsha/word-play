import "./App.css";
import Intro from "./views/Intro";
import SelectSubject from "./views/SelectSubject";
import PlayGame from "./views/PlayGame";
import { useContext } from "react";
import ScoreContextProvider from "./contexts/ScoreContext";
import { GameStageContext } from "./contexts/GameStageContext";
import SubjectContextProvider from "./contexts/SubjectContext";
import WordContextProvider from "./contexts/WordContext";
import SuccessContextProvider from "./contexts/SuccessContext";

function App() {
  const { gameStage } = useContext(GameStageContext);

  return (
    <div className="App">
      {gameStage === "intro" && <Intro />}
      <SubjectContextProvider>
        {gameStage === "selectSubject" && <SelectSubject />}
        {gameStage === "playGame" && (
          <WordContextProvider>
            <SuccessContextProvider>
              <ScoreContextProvider>
                <PlayGame />
              </ScoreContextProvider>
            </SuccessContextProvider>
          </WordContextProvider>
        )}
      </SubjectContextProvider>
    </div>
  );
}

// gameStage === "selectSubject"
// gameStage === "playGame"

// onClick={() => dispatch({ type: "SELECT_SUBJECT" })}
// onClick={() => dispatch({ type: "PLAY_GAME" })}

export default App;
