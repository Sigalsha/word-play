import React, { useContext } from "react";
import styled from "styled-components";
import { GameStageContext } from "../contexts/GameStageContext";

const Wrapper = styled.li`
  list-style-type: none;
  width: 20%;
  padding: 3% 0;
  margin: 1%;
  display: var(--flex);
  flex-flow: var(--f-flow-cw);
  align-items: var(--al-c);

  @media (min-width: 1023px) {
  }

  @media (max-width: 480px) {
    width: 40%;

    :first-child {
      padding-top: ${(props) => (props.isSubjectCard ? "10px" : "20px")};
    }
    :nth-child(2) {
      padding-top: ${(props) => (props.isSubjectCard ? "10px" : "20px")};
    }
  }
`;

const H3Element = styled.h3`
  letter-spacing: var(--ls-s1);
  color: var(--clr-header);
  padding: 2% 2% 5% 2%;
  font-size: var(--fs-basis-m3b);

  :hover {
    cursor: pointer;
  }

  @media (min-width: 1023px) {
  }

  @media (max-width: 480px) {
  }
`;

const ImgElement = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }

  @media (min-width: 1023px) {
    height: 150px;
    width: 150px;
  }

  @media (max-width: 480px) {
    height: ${(props) => (props.isSubjectCard ? "10vh" : "13vh")};
    width: ${(props) => (props.isSubjectCard ? "22vw" : "28vw")};
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
      <ImgElement src={src} alt={name} isSubjectCard={isSubjectCard} />
    </Wrapper>
  );
};

export default Card;
