import React, { useContext } from "react";

// <i></i> can be switched with a real Icon component (<Icon />)
// card's title and icon should change accordingly

// onClick - if isSubjectCard, then click to selectSubject, otherwise, click to select a card for guessing

const Card = ({ isSubjectCard, name, src, onClick }) => {
  // const { dispatch } = useContext(SubjectContext);

  return (
    <div onClick={() => onClick(name)}>
      {isSubjectCard && <h3>{name}</h3>}
      <img style={{ height: 100, width: 100 }} src={src} alt={name} />
    </div>
  );
};

export default Card;
