import React, { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import * as constants from "../constants/constants";
import GameStageContext from "../contexts/GameStageContext";

const Intro = () => {
  const { gameStage, dispatch } = useContext(GameStageContext);
  const { intro } = constants;
  return (
    <div className="intro">
      {gameStage}
      <Header headerText={intro.header} />
      <p>{intro.desc}</p>
      <Button
        onClick={() => dispatch({ type: "INTRO" })}
        buttonText={intro.button}
      />
    </div>
  );
};

export default Intro;
