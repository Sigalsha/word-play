import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const ConfettiWrapper = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} gravity={0.3} friction={1} />;
};

export default ConfettiWrapper;
