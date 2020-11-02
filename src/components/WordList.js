import React from "react";
import * as food from "../constants/words/food";
import * as personal from "../constants/words/personal";
import Card from "./Card";

const WordList = () => {
  const { foodOptions } = food;
  const { personalOptions } = personal;
  console.log(foodOptions, personalOptions);
  return (
    <div className="word-list">
      {/*  <ul>
        {words.map((word) => {
          return (
            <Card
              word={word}
              key={word.id}
              isSubjectCard={false}
              src={word.img}
            />
          );
        })}
      </ul> */}
    </div>
  );
};

export default WordList;
