import React from "react";

// <i></i> can be switched with a real Icon component (<Icon />)
// card's title and icon should change accordingly

const Card = ({ card }) => {
  return (
    <div>
      <h3>{card.title}</h3>
      <i>{card.icon}</i>
    </div>
  );
};

export default Card;
