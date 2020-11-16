import React, { useContext } from "react";
import styled from "styled-components";
import { GameStageContext } from "../contexts/GameStageContext";

// <i></i> can be switched with a real Icon component (<Icon />)
// card's title and icon should change accordingly

// onClick - if isSubjectCard, then click to selectSubject, otherwise, click to select a card for guessing

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

const H3Element = styled.h3`
  font-size: 26px;
  color: #3b054f;
  font-weight: 600;
  padding: 5px;
  margin: 5px 0;
`;

const ImgElement = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 5px;
`;

const Card = ({ isSubjectCard, name, src, onClick }) => {
  const { dispatch } = useContext(GameStageContext);

  const handleCardClick = (name) => {
    onClick(name);
    if (isSubjectCard) {
      dispatch({ type: "SELECT_SUBJECT" });
    }
  };

  return (
    <Wrapper onClick={() => handleCardClick(name)}>
      {isSubjectCard && <H3Element>{name}</H3Element>}
      <ImgElement src={src} alt={name} />
    </Wrapper>
  );
};

export default Card;
