import React, { useContext, useState } from "react";
import * as subjects from "../constants/subjects";
import Card from "./Card";
import { SubjectContext } from "../contexts/SubjectContext";
import styled from "styled-components";

const CardList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0 40px;
  flex-flow: row wrap;
`;

const SubjectList = () => {
  const { subjectsList } = subjects;
  const { chosenSubject, dispatch } = useContext(SubjectContext);

  const selectSubject = (name) => {
    let nameType = name.toUpperCase();
    dispatch({ type: nameType });
  };

  return (
    <div>
      <CardList>
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
      </CardList>
    </div>
  );
};

export default SubjectList;

{
  /*      {chosenSubject.map((word) => {
        return <li key={word.id}>{word.name}</li>;
      })}
      { */
}
