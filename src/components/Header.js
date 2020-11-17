import React from "react";
import styled from "styled-components";

const H1Element = styled.h1`
  letter-spacing: 0.8px;
  margin: ${(props) => (props.isWordHeader ? "30px 0 20px 0" : "30px 0 0 0")};
  color: #3b054f;
  font-size: 60px;
  @media (max-width: 480px) {
    font-size: ${(props) => (props.isSubjectCard ? "30px" : "34px")};
    margin: ${(props) => (props.isWordHeader ? "20px 0 0 0" : "30px 0 0 0")};
  }
`;

const Header = ({ headerText, isSubjectCard, isWordHeader }) => {
  return (
    <H1Element isSubjectCard={isSubjectCard} isWordHeader={isWordHeader}>
      {headerText}
    </H1Element>
  );
};

export default Header;
