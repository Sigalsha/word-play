import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../contexts/ScoreContext";

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: var(--al-c);
  font-size: var(--fs-basis-m4);

  @media (min-width: 1023px) {
    letter-spacing: var(--ls-s2);
  }

  @media (max-width: 480px) {
    font-size: var(--fs-basis-m5);
  }
`;

const Score = () => {
  const { score } = useContext(ScoreContext);

  return <Wrapper>score: {score}</Wrapper>;
};

export default Score;
