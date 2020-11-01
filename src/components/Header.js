import React from "react";

// case start game => Welcome to Word Play!
// case choose a subject => Select A Subject

const Header = ({ headerText }) => {
  return <h1 className="app-header">{headerText}</h1>;
};

export default Header;
