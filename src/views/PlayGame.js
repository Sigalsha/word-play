import React, { useContext, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";
import { SubjectContext } from "../contexts/SubjectContext";
import { WordContext } from "../contexts/WordContext";
import { GameStageContext } from "../contexts/GameStageContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { SuccessContext } from "../contexts/SuccessContext";
import WordList from "../components/WordList";
import Header from "../components/Header";
import Button from "../components/Button";
import Score from "../components/Score";
import Confetti from "../components/Confetti";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 20px;
`;

const GameFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 40px;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

const PlayGame = () => {
  const { chosenSubject, dispatch: subjectDispatch } = useContext(
    SubjectContext
  );
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: gameStageDispatch } = useContext(GameStageContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { success, onSuccessEnd } = useContext(SuccessContext);
  const { playGame } = constants;

  useLayoutEffect(() => {
    dispatch({ type: "GENERATE_WORDS", chosenSubject });
  }, []);

  useEffect(() => {
    const timer = success && setTimeout(() => onSuccessEnd(), 2500);
    return () => clearTimeout(timer);
  }, [success]);

  const resetGameAndScore = () => {
    scoreDispatch({ type: "RESET_SCORE" });
    subjectDispatch({ type: "RESET_SUBJECT" });
    gameStageDispatch({ type: "PLAY_GAME" });
  };

  return (
    <GameWrapper>
      {success && <Confetti height="400px" width="400px" />}
      {!success && words.length && <Header headerText={words[0].name} />}
      {!success && words.length && <WordList wordToGuess={words[0].name} />}
      {!success && (
        <GameFooter>
          <Button
            buttonText={playGame.buttonText}
            onClick={resetGameAndScore}
            isResetButton={true}
          />
          <Score />
        </GameFooter>
      )}
    </GameWrapper>
  );
};

export default PlayGame;
