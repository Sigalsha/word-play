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
    padding: 1% 0;
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
    font-size: var(--fs-basis-m3b);
  }

  @media (max-width: 700px) {
    font-size: var(--fs-basis-m1);
  }

  @media (max-width: 600px) {
    font-size: var(--fs-basis);
  }

  @media (max-width: 480px) {
    font-size: var(--fs-basis-m1);
  }
`;

const ImgElement = styled.img`
  height: 100px;
  width: 100px;
  border-radius: var(--br-10-px);
  :hover {
    cursor: pointer;
  }

  @media (min-width: 1023px) {
    height: ${(props) => (props.isSubjectCard ? "70%" : "100%")};
    width: 50%;
  }

  @media (max-width: 700px) {
    height: 12vh;
    width: 12vw;
  }

  @media (max-width: 600px) {
    height: 10vh;
  }

  @media (max-width: 480px) {
    height: ${(props) => (props.isSubjectCard ? "var(--h-10-vh)" : "13vh")};
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
