import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../contexts/ScoreContext";

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: var(--al-c);
  font-size: 32px;
  height: 70px;
  width: 200px;
  border-radius: 5px;
  margin-top: 40px;
  background-color: var(--clr-sc-back);

  @media (max-width: 480px) {
    font-size: 26px;
    width: 150px;
  }
`;

const Score = () => {
  const { score } = useContext(ScoreContext);

  return <Wrapper>score: {score}</Wrapper>;
};

export default Score;
