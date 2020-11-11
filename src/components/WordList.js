import React, { useContext, useState } from "react";
import * as food from "../constants/words/food";
import * as personal from "../constants/words/personal";
import Card from "./Card";
import { animals } from "../constants/words/animals";
import { WordContext } from "../contexts/WordContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { ScoreContext } from "../contexts/ScoreContext";

const WordList = ({ wordToGuess }) => {
  const { chosenSubject } = useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  const { score, dispatch: scoreDispatch } = useContext(ScoreContext);
  const [successMsg, setSuccessMsg] = useState("");

  const selectImage = (imageName) => {
    if (imageName === wordToGuess) {
      setSuccessMsg("Great!");
      dispatch({ type: "CORRECT_ANSWER" });
      scoreDispatch({ type: "ADD_POINTS" });
      dispatch({ type: "GENERATE_WORDS", chosenSubject });
    } else {
      scoreDispatch({ type: "REDUCE_POINTS" });
    }
  };

  return (
    <div className="word-list">
      <h1>{successMsg}</h1>
      {words.length ? (
        <ul>
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
        </ul>
      ) : (
        <div>loading... </div>
      )}
    </div>
  );
};

export default WordList;
