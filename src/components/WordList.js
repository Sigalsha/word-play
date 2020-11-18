import React, { useContext } from "react";
import styled from "styled-components";
import { WordContext } from "../contexts/WordContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { SuccessContext } from "../contexts/SuccessContext";
import Card from "./Card";

const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 40px;
  flex-flow: row wrap;

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`;

const WordList = ({ wordToGuess }) => {
  const { chosenSubject } = useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { isFalseGuess, onSuccess, onFalseGuess } = useContext(SuccessContext);

  const selectImage = (imageName) => {
    if (imageName === wordToGuess) {
      onSuccess();
      dispatch({ type: "CORRECT_ANSWER" });
      scoreDispatch({ type: "ADD_POINTS" });
      dispatch({ type: "GENERATE_WORDS", chosenSubject });
    } else {
      onFalseGuess();
      scoreDispatch({ type: "REDUCE_POINTS" });
    }
  };

  return (
    <CardList>
      {words.length &&
        words.map((word) => {
          return (
            <Card
              name={word.name}
              key={word.id}
              isSubjectCard={false}
              src={word.img}
              onClick={selectImage}
            />
          );
        })}
    </CardList>
  );
};

export default WordList;
