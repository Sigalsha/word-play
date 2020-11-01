import React from "react";

// case start game => Start Play
// case reset game => Reset Game

const Button = ({ onClick, buttonText }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
