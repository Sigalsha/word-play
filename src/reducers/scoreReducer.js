export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      return state + 100;
    case "REDUCE_POINTS":
      if (state <= 0) {
        return state;
      }
      return state - 50;
    default:
      return state;
  }
};
