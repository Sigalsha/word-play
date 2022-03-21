import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../contexts/ScoreContext";

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: var(--al-c);
  font-size: var(--fs-basis-m4);
  letter-spacing: var(--ls-s2);

  @media (min-width: 1023px) {
    font-size: var(--fs-basis-m3b);
    margin-left: auto;
  }

  @media (max-width: 700px) {
    font-size: var(--fs-basis-m3);
  }

  @media (max-width: 480px) {
    font-size: var(--fs-basis-m3);
  }
`;

const Score = () => {
  const { score } = useContext(ScoreContext);

  return <Wrapper>score: {score}</Wrapper>;
};

export default Score;
