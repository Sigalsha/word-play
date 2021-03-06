import React, { useContext } from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";
import { GameStageContext } from "../contexts/GameStageContext";
import Header from "../components/Header";
import Button from "../components/Button";

const IntroWrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media (max-width: 480px) {
    height: 500px;
  }
`;

const Desc = styled.p`
  font-size: 28px;
  margin: 30px 0;
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 40px 15px;
    line-height: 1.7;
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
