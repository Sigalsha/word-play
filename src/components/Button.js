import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: var(--clr-btn-back);
  text-decoration: none;
  border: transparent;
  font-size: 32px;
  font-family: inherit;
  height: 70px;
  width: 200px;
  border-radius: 5px;
  margin-top: 40px;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => (props.isResetButton ? "26px" : "32px")};
    width: ${(props) => (props.isResetButton ? "150px" : "200px")};
  }
`;

const Button = ({ onClick, buttonText, isResetButton }) => {
  return (
    <ButtonElement
      type="button"
      onClick={onClick}
      isResetButton={isResetButton}
    >
      {buttonText}
    </ButtonElement>
  );
};

export default Button;
