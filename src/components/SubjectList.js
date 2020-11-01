import React from "react";
import * as constants from "../constants/constants";
import Card from "./Card";

const SubjectList = () => {
  const { subjects } = constants.selectSubject;
  return (
    <div className="subject-list">
      {
        <ul>
          {subjects.map((subject) => {
            console.log(subject);
            return (
              <Card
                name={subject.name}
                key={subject.id}
                img={subject.img}
                isSubjectCard={true}
              />
            );
          })}
        </ul>
      }
    </div>
  );
};

export default SubjectList;
