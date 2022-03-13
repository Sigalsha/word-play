import React from "react";
import styled from "styled-components";

const H1Element = styled.h1`
  letter-spacing: var(--ls-l);
  text-transform: var(--tt-up);
  font-family: var(--ff-header);
  margin: 5%;
  color: var(--clr-header);
  font-size: var(--fs-basis-l1);

  @media (min-width: 1023px) {
    margin: 5% 5% 0 2%;
  }

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
// margin: ${(props) => (props.isWordHeader ? "30px 0 20px 0" : "30px 0 0 0")};
//
