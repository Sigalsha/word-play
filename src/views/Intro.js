import React, { useContext } from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";
import { GameStageContext } from "../contexts/GameStageContext";
import Header from "../components/Header";
import Button from "../components/Button";

const IntroWrapper = styled.div`
  display: var(--flex);
  justify-content: center;
  align-items: var(--al-c);
  flex-flow: var(--f-flow-cw);

  @media (min-width: 1023px) {
    margin: 10% 20%;
  }

  @media (max-width: 480px) {
    margin: 25vh 5%;
  }
`;

const Desc = styled.p`
  font-size: var(--fs-basis-m4);
  padding: 20% 0 15% 0;

  @media (min-width: 1023px) {
    font-size: var(--fs-basis-l2);
    padding: 15% 5%;
  }

  @media (max-width: 480px) {
    line-height: var(--lh-1-7);
  }
`;

const Intro = () => {
  const { dispatch } = useContext(GameStageContext);
  const { intro } = constants;
  return (
    <IntroWrapper>
      <Header headerText={intro.header} />
      <Desc>{intro.desc}</Desc>
      <Button
        onClick={() => dispatch({ type: "INTRO" })}
        buttonText={intro.button}
      />
    </IntroWrapper>
  );
};

export default Intro;
