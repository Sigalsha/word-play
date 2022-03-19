import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  height: var(--h-10-vh);
  width: 50vw;
  margin-top: auto;
  display: var(--in-flex);
  justify-content: var(--jc-c);
  align-items: var(--al-c);
  background-color: var(--clr-btn-back);
  text-decoration: none;
  font-size: ${(props) =>
    props.isResetButton ? "var(--fs-basis-m5)" : "var(--fs-basis-m4)"};
  font-family: inherit;
  border: none;
  border-radius: var(--br-10-px);
  letter-spacing: var(--ls-in);
  :hover {
    cursor: pointer;
  }

  @media (min-width: 1023px) {
    width: ${(props) => (props.isResetButton ? "20vw" : "30vw")};
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
