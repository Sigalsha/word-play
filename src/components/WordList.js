import React, { useContext, useEffect } from "react";
import * as food from "../constants/words/food";
import * as personal from "../constants/words/personal";
import Card from "./Card";
import { animals } from "../constants/words/animals";
import { WordContext } from "../contexts/WordContext";

const WordList = () => {
  const { words } = useContext(WordContext);

  console.log(words);
  console.log(words[0]);
  console.log(words[2]);

  return (
    <div className="word-list">
      {words.length ? (
        <ul>
          {words.map((word) => {
            console.log("img", word.img);
            return (
              <Card
                name={word.name}
                key={word.id}
                isSubjectCard={false}
                src={word.img}
              />
            );
          })}
        </ul>
      ) : (
        <div>loading... </div>
      )}
    </div>
  );
};

export default WordList;
