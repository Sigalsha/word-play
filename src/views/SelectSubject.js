import React, { useContext } from "react";
import Header from "../components/Header";
import SubjectList from "../components/SubjectList.js";
import * as constants from "../constants/constants";
import { GameStageContext } from "../contexts/GameStageContext";
import SubjectContextProvider from "../contexts/SubjectContext";

const SelectSubject = () => {
  const { selectSubject } = constants;
  const { gameStage } = useContext(GameStageContext);
  return (
    <div className="select-subject">
      {gameStage}
      <Header headerText={selectSubject.header} />
      <SubjectContextProvider>
        <SubjectList />
      </SubjectContextProvider>
    </div>
  );
};

export default SelectSubject;
