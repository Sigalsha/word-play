import React, { useContext } from "react";
import Header from "../components/Header";
import SubjectList from "../components/SubjectList.js";
import * as constants from "../constants/constants";

const SelectSubject = () => {
  const { selectSubject } = constants;

  return (
    <div className="select-subject">
      <Header headerText={selectSubject.header} />
      <SubjectList />
    </div>
  );
};

export default SelectSubject;
