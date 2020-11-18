import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../constants/31572-try-again.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const TryAgainLottie = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default TryAgainLottie;
