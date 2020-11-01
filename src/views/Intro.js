import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import * as constants from "../constants/constants";

const Intro = (props) => {
  const { intro } = constants;
  return (
    <div className="intro">
      <Header headerText={intro.header} />
      <p>{intro.desc}</p>
      <Button onClick={props.onClick} buttonText={intro.button} />
    </div>
  );
};

export default Intro;
