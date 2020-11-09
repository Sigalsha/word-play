export const gameStageReducer = (state = "intro", action) => {
  switch (action.type) {
    case "INTRO":
      return (state = "selectSubject");
    case "SELECT_SUBJECT":
      return (state = "playGame");
    case "PLAY_GAME":
      return (state = "intro");
    default:
      return (state = "intro");
  }
};
