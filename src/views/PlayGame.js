import React, { useContext, useLayoutEffect, useState } from "react";
import WordList from "../components/WordList";
import Header from "../components/Header";
import Button from "../components/Button";
import Score from "../components/Score";
import { SubjectContext } from "../contexts/SubjectContext";
import { WordContext } from "../contexts/WordContext";
import * as constants from "../constants/constants";
import { GameStageContext } from "../contexts/GameStageContext";
import { ScoreContext } from "../contexts/ScoreContext";

const PlayGame = () => {
  const { chosenSubject, dispatch: subjectDispatch } = useContext(
    SubjectContext
  );
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: gameStageDispatch } = useContext(GameStageContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { playGame } = constants;

  useLayoutEffect(() => {
    dispatch({ type: "GENERATE_WORDS", chosenSubject });
  }, []);

  const resetGameAndScore = () => {
    scoreDispatch({ type: "RESET_SCORE" });
    subjectDispatch({ type: "RESET_SUBJECT" });
    gameStageDispatch({ type: "PLAY_GAME" });
  };

  return (
    <div className="play-game-view">
      {words.length && <Header headerText={words[0].name} />}
      {words.length && <WordList wordToGuess={words[0].name} />}
      <Button buttonText={playGame.buttonText} onClick={resetGameAndScore} />
      <Score />
    </div>
  );
};

export default PlayGame;
