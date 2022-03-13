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
import TryAgainLottie from "../components/TryAgainLottie";

const GameWrapper = styled.div`
  display: var(--flex);
  flex-direction: column;
  justify-content: center;
  margin: 5px 20px;
`;

const GameFooter = styled.div`
  display: var(--flex);
  justify-content: var(--jc-se);
  margin: 10px 40px;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

const CreditMsg = styled.div`
  font-size: 18px;
  align-items: var(--al-c);
  margin-top: 60px;
  line-height: var(--lh-1-2);

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 30px;
    overflow-wrap: break-word;
  }
`;

const PlayGame = () => {
  const { chosenSubject, dispatch: subjectDispatch } =
    useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: gameStageDispatch } = useContext(GameStageContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { success, onSuccessEnd, falseGuess, onFalseGuessEnd } =
    useContext(SuccessContext);
  const { playGame, credit } = constants;

  useLayoutEffect(() => {
    dispatch({ type: "GENERATE_WORDS", chosenSubject });
  }, []);

  useEffect(() => {
    const timer = success && setTimeout(() => onSuccessEnd(), 2500);
    return () => clearTimeout(timer);
  }, [success]);

  useEffect(() => {
    const falseGuessTimer =
      falseGuess && setTimeout(() => onFalseGuessEnd(), 2000);
    return () => clearTimeout(falseGuessTimer);
  }, [falseGuess]);

  const resetGameAndScore = () => {
    scoreDispatch({ type: "RESET_SCORE" });
    subjectDispatch({ type: "RESET_SUBJECT" });
    gameStageDispatch({ type: "PLAY_GAME" });
  };

  const generateRandomWordIndex = () => {
    return Math.floor(Math.random() * 4);
  };

  let randomWordNum = generateRandomWordIndex();

  return (
    <GameWrapper>
      {success && <Confetti height="400px" width="400px" />}
      {falseGuess && <TryAgainLottie />}
      {!success && words.length && (
        <Header headerText={words[randomWordNum].name} isWordHeader={true} />
      )}
      {!success && words.length && (
        <WordList wordToGuess={words[randomWordNum].name} />
      )}
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
      {!success && (
        <CreditMsg>
          {credit.firstText}
          <br />
          {credit.secondText}
        </CreditMsg>
      )}
    </GameWrapper>
  );
};

export default PlayGame;
