import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../constants/31572-try-again.json";

const TryAgainWrapper = styled.div`
  margin: 0;
  max-height: 18vh;
  padding-bottom: 15%;

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
      <Lottie options={defaultOptions} height="25%" width="25%" />
    </TryAgainWrapper>
  );
};

export default TryAgainLottie;
