import React, { useContext, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import * as constants from "../../constants/constants";
import { SubjectContext } from "../../contexts/SubjectContext";
import { WordContext } from "../../contexts/WordContext";
import { GameStageContext } from "../../contexts/GameStageContext";
import { ScoreContext } from "../../contexts/ScoreContext";
import { SuccessContext } from "../../contexts/SuccessContext";
import WordList from "../../components/WordList";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Score from "../../components/Score";
import ConfettiWrapper from "../../components/ConfettiWrapper";
import TryAgainLottie from "../../components/TryAgainLottie";

const GameWrapper = styled.div`
  display: var(--flex);
  flex-direction: column;
  align-items: var(--al-c);
  justify-content: center;
  margin-top: 10vh;

  @media (min-width: 1023px) {
    margin: 3% 5% 5% 5%;
  }

  @media (max-width: 480px) {
    width: var(--w-100);
  }
`;

const GameFooter = styled.div`
  width: var(--w-100);
  display: var(--flex);
  flex-flow: var(--f-flow-rw);
  justify-content: var(--jc-se);
  align-items: var(--al-c);
  margin-top: ${(props) => (props.isFalseGuess ? "5vh" : "15vh")};

  @media (min-width: 1023px) {
    margin-top: ${(props) => (props.isFalseGuess ? "5vh" : "15vh")};
    width: 50%;
  }

  @media (max-width: 480px) {
    margin-top: ${(props) => (props.isFalseGuess ? "2vh" : "10vh")};
  }
`;

const CreditMsg = styled.div`
  font-size: var(--fs-basis-s6);
  align-items: var(--al-c);
  line-height: var(--lh-1-2);
  position: absolute;
  top: auto;
  bottom: 0;
  padding-bottom: 2.5vh;

  @media (max-width: 480px) {
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
    <GameWrapper isFalseGuess={falseGuess}>
      {success && <ConfettiWrapper height="400px" width="400px" />}
      {falseGuess && <TryAgainLottie />}
      {!success && words.length && (
        <Header
          headerText={words[randomWordNum].name}
          isWordHeader={true}
          isFalseGuess={falseGuess}
        />
      )}
      {!success && words.length && (
        <WordList
          wordToGuess={words[randomWordNum].name}
          isFalseGuess={falseGuess}
        />
      )}
      {!success && (
        <GameFooter isFalseGuess={falseGuess}>
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
          {credit.firstLink}
          <br />
          {credit.secondText}
          <br />
          {credit.secondLink}
        </CreditMsg>
      )}
    </GameWrapper>
  );
};

export default PlayGame;
