import React from "react";
import styled from "styled-components";
import logo from "../assets/carrot-logo.png";

const HeaderWrapper = styled.div`
  display: var(--flex);
  justify-content: ${(props) =>
    props.isSubjectCard ? "var(--jc-c)" : "var(--jc-sb)"};
  align-items: var(--al-c);
  width: var(--w-100);
`;

const H1Element = styled.h1`
  letter-spacing: var(--ls-l);
  text-transform: var(--tt-up);
  font-family: var(--ff-header);
  color: var(--clr-header);
  font-size: ${(props) =>
    props.isSubjectCard || props.isWordHeader
      ? "var(--fs-basis-l4)"
      : "var(--fs-basis-l1)"};
  text-shadow: var(--tsh-1), var(--tsh-1), var(--tsh-1), var(--tsh-1);

  @media (min-width: 1023px) {
    margin: 5% 5% 0 2%;
    font-size: var(--fs-basis-l3);
  }

  @media (max-width: 480px) {
    /*     font-size: ${(props) => (props.isSubjectCard ? "30px" : "34px")};
    margin: ${(props) => (props.isWordHeader ? "20px 0 0 0" : "30px 0 0 0")}; */
  }
`;

const Img = styled.img`
  height: 85px;
  width: 85px;

  /*   @media (max-width: 480px) {
    height: 80px;
    width: 80px;
  } */
`;

const Header = ({ headerText, isSubjectCard, isWordHeader }) => {
  return (
    <HeaderWrapper isSubjectCard={isSubjectCard} isWordHeader={isWordHeader}>
      {!isWordHeader && !isSubjectCard && <Img src={logo} alt="carrot-logo" />}
      <H1Element isSubjectCard={isSubjectCard} isWordHeader={isWordHeader}>
        {headerText}
      </H1Element>
      {!isWordHeader && !isSubjectCard && <Img src={logo} alt="carrot-logo" />}
    </HeaderWrapper>
  );
};

export default Header;
// margin: ${(props) => (props.isWordHeader ? "30px 0 20px 0" : "30px 0 0 0")};
//
