import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { WordContext } from "../contexts/WordContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { ScoreContext } from "../contexts/ScoreContext";
import { SuccessContext } from "../contexts/SuccessContext";
import Card from "./Card";

const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0 40px;
  flex-flow: row wrap;
`;

const WordList = ({ wordToGuess }) => {
  const { chosenSubject } = useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  const { dispatch: scoreDispatch } = useContext(ScoreContext);
  const { success, onSuccessEnd, onSuccess } = useContext(SuccessContext);
  const [successMsg, setSuccessMsg] = useState(false);

  const selectImage = (imageName) => {
    if (imageName === wordToGuess) {
      onSuccess();
      dispatch({ type: "CORRECT_ANSWER" });
      scoreDispatch({ type: "ADD_POINTS" });
      dispatch({ type: "GENERATE_WORDS", chosenSubject });
    } else {
      scoreDispatch({ type: "REDUCE_POINTS" });
    }
  };

  return (
    <div>
      {words.length && (
        <CardList>
          {words.map((word) => {
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
      )}
    </div>
  );
};

export default WordList;

/*  */
