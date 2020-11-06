import { animals } from "../constants/words/animals";
import { body } from "../constants/words/body";
import { buildings } from "../constants/words/buildings";
import { clothes } from "../constants/words/clothes";
import { computer } from "../constants/words/computer";
import { food } from "../constants/words/food";
import { household } from "../constants/words/household";
import { personal } from "../constants/words/personal";

export const subjectReducer = (state, action) => {
  switch (action.type) {
    case "ANIMALS":
      return [...state, animals];
    case "BODY":
      return [...state, body];
    case "BUILDINGS":
      return [...state, buildings];
    case "CLOTHES":
      return [...state, clothes];
    case "COMPUTER":
      return [...state, computer];
    case "FOOD":
      return [...state, food];
    case "HOUSEHOLD":
      return [...state, household];
    case "PERSONAL":
      return [...state, personal];
    default:
      return state;
  }

  // alternative: return state.filter((subject) => subject.name === "personal");
};
