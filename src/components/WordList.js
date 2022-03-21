import React, { useContext } from "react";
import styled from "styled-components";
import { WordContext } from "../contexts/WordContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { SuccessContext } from "../contexts/SuccessContext";
import Card from "./Card";

const CardList = styled.ul`
  width: var(--w-100);
  display: var(--flex);
  justify-content: var(--jc-se);
  flex-flow: var(--f-flow-rw);
  margin-top: ${(props) => (props.isFalseGuess ? "3%" : "5%")};

  @media (min-width: 1023px) {
    margin-top: ${(props) => (props.isFalseGuess ? "2vh" : "10vh")};
    width: 90%;
  }

  @media (max-width: 700px) {
    margin-top: ${(props) => (props.isFalseGuess ? "3%" : "10%")};
  }

  @media (max-width: 480px) {
    margin: var(--m-5);
    padding-top: var(--pt-1vh);
  }
`;

const WordList = ({ wordToGuess, isFalseGuess }) => {
  const { chosenSubject } = useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { onSuccess, onFalseGuess } = useContext(SuccessContext);

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
    <CardList isFalseGuess={isFalseGuess}>
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
