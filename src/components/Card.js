import React from "react";

// <i></i> can be switched with a real Icon component (<Icon />)
// card's title and icon should change accordingly

// onClick - if isSubjectCard, then click to selectSubject, otherwise, click to select a card for guessing

const Card = ({ isSubjectCard }) => {
  return (
    <div>
      {/*       {isSubjectCard && <h3>{card.title}</h3>}
      <i>{card.icon}</i> */}
    </div>
  );
};

export default Card;
