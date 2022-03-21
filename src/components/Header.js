import React from "react";
import styled from "styled-components";
import logo from "../assets/carrot-logo.png";

const HeaderWrapper = styled.div`
  display: var(--flex);
  justify-content: var(--jc-c);
  align-items: var(--al-c);
  width: var(--w-100);
  margin-top: ${(props) => props.isFalseGuess && "3vh"};

  @media (min-width: 1023px) {
    justify-content: var(--jc-c);
    margin-top: ${(props) => props.isFalseGuess && "3vh"};
  }

  @media (max-width: 600px) {
    font-size: var(--fs-basis-s3);
  }

  @media (max-width: 480px) {
    justify-content: ${(props) =>
      props.isSubjectCard || props.isWordHeader
        ? "var(--jc-c)"
        : "var(--jc-sb)"};
    margin-top: 0;
  }
`;

const H1Element = styled.h1`
  letter-spacing: var(--ls-l);
  text-transform: var(--tt-up);
  font-family: var(--ff-header);
  color: var(--clr-header);
  text-shadow: ${(props) =>
    props.isSubjectCard || props.isWordHeader
      ? "var(--tsh-1), var(--tsh-1)"
      : "var(--tsh-1), var(--tsh-1), var(--tsh-1), var(--tsh-1);"};
  padding: 2.5vh 2vw 0 2vw;
  font-size: ${(props) =>
    props.isSubjectCard || props.isWordHeader
      ? "var(--fs-basis-m4)"
      : "var(--fs-basis-l1)"};

  @media (min-width: 1023px) {
    padding: 2.5vh 2vw 0 2vw;
    font-size: ${(props) =>
      props.isSubjectCard || props.isWordHeader
        ? "var(--fs-basis-l1)"
        : "var(--fs-basis-l3)"};
  }

  @media (max-width: 480px) {
    font-size: ${(props) =>
      props.isSubjectCard || props.isWordHeader
        ? "var(--fs-basis-m4)"
        : "var(--fs-basis-l2)"};
  }
`;

const Img = styled.img`
  height: 85px;
  width: 85px;
  transform: rotate(10deg);

  @media (max-width: 480px) {
    height: 65px;
    width: 65px;
  }
`;

const Header = ({ headerText, isSubjectCard, isWordHeader, isFalseGuess }) => {
  return (
    <HeaderWrapper
      isSubjectCard={isSubjectCard}
      isWordHeader={isWordHeader}
      isFalseGuess={isFalseGuess}
    >
      {!isWordHeader && !isSubjectCard && <Img src={logo} alt="carrot-logo" />}
      <H1Element isSubjectCard={isSubjectCard} isWordHeader={isWordHeader}>
        {headerText}
      </H1Element>
      {!isWordHeader && !isSubjectCard && <Img src={logo} alt="carrot-logo" />}
    </HeaderWrapper>
  );
};

export default Header;
