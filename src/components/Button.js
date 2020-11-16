import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: #ff7200;
  text-decoration: none;
  border: transparent;
  font-size: 32px;
  height: 70px;
  width: 200px;
  border-radius: 5px;
  margin-top: 40px;
`;

const Button = ({ onClick, buttonText, props }) => {
  return (
    <ButtonElement type="button" onClick={onClick}>
      {buttonText}
    </ButtonElement>
  );
};

export default Button;
