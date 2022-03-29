import React from "react";
import styled from "styled-components";
import * as constants from "../../constants/constants";
import Header from "../../components/Header";
import SubjectList from "../../components/SubjectList";

const Wrapper = styled.div`
  width: var(--w-100);
  display: var(--flex);
  flex-direction: column;
  align-items: var(--al-c);
  justify-content: center;
  margin-top: 10vh;

  @media (min-width: 1023px) {
    margin-top: 3%;
  }

  @media (max-width: 480px) {
    margin-top: 8vh;
  }
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
