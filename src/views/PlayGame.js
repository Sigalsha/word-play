import React from "react";
import WordList from "../components/WordList";
import Header from "../components/Header";
import Button from "../components/Button";
import Score from "../components/Score";

const PlayGame = () => {
  return (
    <div className="play-game-view">
      <Header />
      <WordList />
      <Button buttonText="start over" />
      <Score />
    </div>
  );
};

export default PlayGame;
