import React, { useContext } from "react";
import styled from "styled-components";
import * as subjects from "../constants/subjects";
import { SubjectContext } from "../contexts/SubjectContext";
import Card from "./Card";

const CardList = styled.ul`
  width: var(--w-100);
  display: var(--flex);
  justify-content: var(--jc-se);
  flex-flow: var(--f-flow-rw);

  @media (max-width: 480px) {
    margin-top: 5%;
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
