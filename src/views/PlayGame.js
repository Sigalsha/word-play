import React, { useContext, useLayoutEffect, useState } from "react";
import WordList from "../components/WordList";
import Header from "../components/Header";
import Button from "../components/Button";
import Score from "../components/Score";
import WordContextProvider from "../contexts/WordContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { WordContext } from "../contexts/WordContext";

const PlayGame = () => {
  const { chosenSubject } = useContext(SubjectContext);
  const { words, dispatch } = useContext(WordContext);
  // const [words, setWords] = useState([]);
  console.log(chosenSubject);

  useLayoutEffect(() => {
    dispatch({ type: "GENERATE_WORDS", chosenSubject });
    console.log(words);
  }, []);

  console.log(words);

  return (
    <div className="play-game-view">
      {words.length && <Header headerText={words[0].name} />}
      <WordList />
      <Button buttonText="start over" />
      <Score />
    </div>
  );
};

export default PlayGame;
