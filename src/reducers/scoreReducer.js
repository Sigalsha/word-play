export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      return state + 100;
    case "REDUCE_POINTS":
      return state - 50;
    default:
      return state;
  }
};
