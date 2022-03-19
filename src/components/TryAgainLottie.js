import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../constants/31572-try-again.json";

const TryAgainWrapper = styled.div`
  padding: var(--pd-0);
  margin: 0 0 2vh 0;
  max-height: 20vh;

  @media (min-width: 1023px) {
    padding-bottom: 5%;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const TryAgainLottie = () => {
  return (
    <TryAgainWrapper>
      <Lottie options={defaultOptions} height="30%" width="30%" />
    </TryAgainWrapper>
  );
};

export default TryAgainLottie;
