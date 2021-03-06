import React, { useContext } from "react";
import styled from "styled-components";
import * as subjects from "../constants/subjects";
import { SubjectContext } from "../contexts/SubjectContext";
import Card from "./Card";

const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0 40px;
  flex-flow: row wrap;
  @media (max-width: 480px) {
    margin: 0 40px 20px 0;
    padding-bottom: 20px;
  }
`;

const SubjectList = () => {
  const { subjectsList } = subjects;
  const { dispatch } = useContext(SubjectContext);

  const selectSubject = (name) => {
    let nameType = name.toUpperCase();
    dispatch({ type: nameType });
  };

  return (
    <CardList>
      {subjectsList.length &&
        subjectsList.map((subject) => {
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
    </CardList>
  );
};

export default SubjectList;
