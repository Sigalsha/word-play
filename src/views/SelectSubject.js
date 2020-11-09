import React, { useContext } from "react";
import Header from "../components/Header";
import SubjectList from "../components/SubjectList.js";
import * as constants from "../constants/constants";
import SubjectContextProvider from "../contexts/SubjectContext";

const SelectSubject = () => {
  const { selectSubject } = constants;

  return (
    <div className="select-subject">
      <Header headerText={selectSubject.header} />
      <SubjectContextProvider>
        <SubjectList />
      </SubjectContextProvider>
    </div>
  );
};

export default SelectSubject;
