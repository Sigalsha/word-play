import React from "react";
import styled from "styled-components";

const H1Element = styled.h1`
  letter-spacing: 0.8px;
  margin: 1em 0 0 0;
  color: #3b054f;
  font-size: 60px;
`;

const Header = ({ headerText }) => {
  return <H1Element>{headerText}</H1Element>;
};

export default Header;
