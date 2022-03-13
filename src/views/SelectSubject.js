import React from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";
import Header from "../components/Header";
import SubjectList from "../components/SubjectList.js";

const Wrapper = styled.div`
  display: var(--flex);
  flex-direction: column;
  align-items: var(--al-c);
  justify-content: center;
`;

const SelectSubject = () => {
  const { selectSubject } = constants;

  return (
    <Wrapper>
      <Header headerText={selectSubject.header} isSubjectCard={true} />
      <SubjectList />
    </Wrapper>
  );
};

export default SelectSubject;
