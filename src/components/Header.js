import React from "react";
import styled from "styled-components";

const H1Element = styled.h1`
  letter-spacing: 0.8px;
  margin: 1em 0 0 0;
  color: #3b054f;
  font-size: 60px;
  @media (max-width: 480px) {
    font-size: ${(props) => (props.isSubjectCard ? "30px" : "40px")};
  }
`;

const Header = ({ headerText, isSubjectCard }) => {
  return <H1Element isSubjectCard={isSubjectCard}>{headerText}</H1Element>;
};

export default Header;
