import React, { useContext } from "react";
import { GameStageContext } from "../contexts/GameStageContext";

// <i></i> can be switched with a real Icon component (<Icon />)
// card's title and icon should change accordingly

// onClick - if isSubjectCard, then click to selectSubject, otherwise, click to select a card for guessing

const Card = ({ isSubjectCard, name, src, onClick }) => {
  const { dispatch } = useContext(GameStageContext);

  const handleCardClick = (name) => {
    onClick(name);
    if (isSubjectCard) {
      dispatch({ type: "SELECT_SUBJECT" });
    }
  };

  return (
    <div onClick={() => handleCardClick(name)}>
      {isSubjectCard && <h3>{name}</h3>}
      <img style={{ height: 100, width: 100 }} src={src} alt={name} />
    </div>
  );
};

export default Card;
