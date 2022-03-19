import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../contexts/ScoreContext";

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: var(--al-c);
  font-size: 32px;
  border-radius: 5px;
  border: 0.25em solid rgb(59, 5, 79, 40%);

  @media (max-width: 480px) {
    font-size: var(--fs-basis-m4);
    padding: 2vh 0;
  }
`;

const Score = () => {
  const { score } = useContext(ScoreContext);

  return <Wrapper>score: {score}</Wrapper>;
};

export default Score;
