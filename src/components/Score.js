import React, { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

const Score = () => {
  const { score } = useContext(ScoreContext);

  return <div>score : {score}</div>;
};

export default Score;
