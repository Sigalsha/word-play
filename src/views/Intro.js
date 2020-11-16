import React, { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import * as constants from "../constants/constants";
import { GameStageContext } from "../contexts/GameStageContext";
import styled from "styled-components";

const IntroWrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const Desc = styled.p`
  font-size: 28px;
  margin: 30px 0;
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
