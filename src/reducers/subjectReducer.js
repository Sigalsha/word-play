export const subjectReducer = (state, action) => {
  switch (action.type) {
    case "ANIMALS":
      return state.filter((subject) => subject.name === "animals");
  }
};
