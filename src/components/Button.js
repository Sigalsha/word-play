import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  width: ${(props) => (props.isResetButton ? "25vw" : "40vw")};
  height: var(--h-10-vh);
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
    width: ${(props) => (props.isResetButton ? "30%" : "28vw")};
    font-size: ${(props) =>
      props.isResetButton ? "var(--fs-basis-m3b)" : "var(--fs-basis-m4)"};
  }

  @media (max-width: 700px) {
    width: ${(props) => (props.isResetButton ? "40vw" : "60vw")};
    font-size: ${(props) =>
      props.isResetButton ? "var(--fs-basis-m3)" : "var(--fs-basis-m4)"};
  }

  @media (max-width: 480px) {
    font-size: ${(props) =>
      props.isResetButton ? "var(--fs-basis-m3)" : "var(--fs-basis-m3)"};
    width: ${(props) => (props.isResetButton ? "45vw" : "60vw")};
    height: ${(props) => (props.isResetButton ? "8vh" : "10vh")};
    letter-spacing: var(--ls-s2);
    margin-top: ${(props) => (props.isResetButton ? "0" : "25%")};
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
