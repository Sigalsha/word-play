import React, { useState } from "react";
import * as constants from "../constants/constants";
import Card from "./Card";

const SubjectList = (props) => {
  const { subjectsList } = constants.selectSubject;
  const [chosenSubject, setSubject] = useState("");

  const selectSubject = () => {
    setSubject(chosenSubject);
    props.onClick();
  };
  return (
    <div className="subject-list">
      {
        <ul>
          {subjectsList.map((subject) => {
            console.log(subject);
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
