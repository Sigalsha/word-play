import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: var(--clr-btn-back);
  text-decoration: none;
  border: transparent;
  font-size: ${(props) =>
    props.isResetButton ? "var(--fs-basis-m3)" : "var(--fs-basis-m4)"};
  font-family: inherit;
  height: 10vh;
  width: ${(props) => (props.isResetButton ? "40vw" : "50vw")};
  border-radius: var(--br-10-px);
  letter-spacing: var(--ls-in);
  margin-top: auto;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
  }
`;
/* ${(props) => (props.isResetButton ? "7vh" : "10vh")}; */

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
