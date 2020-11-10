import React, { useContext, useState } from "react";
import * as subjects from "../constants/subjects";
import Card from "./Card";
import { SubjectContext } from "../contexts/SubjectContext";
import { GameStageContext } from "../contexts/GameStageContext";

const SubjectList = () => {
  const { subjectsList } = subjects;
  const { chosenSubject, dispatch } = useContext(SubjectContext);

  const selectSubject = (name) => {
    console.log(name);
    let nameType = name.toUpperCase();
    console.log(nameType);
    dispatch({ type: nameType });
  };
  return (
    <div className="subject-list">
      {chosenSubject.map((word) => {
        return <li key={word.id}>{word.name}</li>;
      })}
      {
        <ul>
          {subjectsList.map((subject) => {
            return (
              <Card
                name={subject.name}
                key={subject.id}
                src={subject.img}
                isSubjectCard={true}
                onClick={selectSubject}
              />
            );
          })}
        </ul>
      }
    </div>
  );
};

export default SubjectList;
