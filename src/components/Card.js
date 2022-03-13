import React, { useContext } from "react";
import styled from "styled-components";
import { GameStageContext } from "../contexts/GameStageContext";

const Wrapper = styled.li`
  list-style-type: none;
  width: 20%;
  padding: 3% 0;
  display: var(--flex);
  flex-flow: var(--f-flow-cw);
  align-items: var(--al-c);
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin: 10px 10px 15px 10px;
    padding: 30px 20px;

    :first-child {
      padding-top: ${(props) => (props.isSubjectCard ? "10px" : "20px")};
    }
    :nth-child(2) {
      padding-top: ${(props) => (props.isSubjectCard ? "10px" : "20px")};
    }
  }
`;

const H3Element = styled.h3`
  font-size: var(--fs-basis-m2);
  letter-spacing: var(--ls-s2);
  color: var(--clr-header);
  padding: 2%;

  :hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ImgElement = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    height: 120px;
    width: 120px;
  }
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
    <Wrapper
      onClick={() => handleCardClick(name)}
      isSubjectCard={isSubjectCard}
    >
      {isSubjectCard && <H3Element>{name}</H3Element>}
      <ImgElement src={src} alt={name} />
    </Wrapper>
  );
};

export default Card;
