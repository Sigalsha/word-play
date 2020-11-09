import React from "react";
import * as food from "../constants/words/food";
import * as personal from "../constants/words/personal";
import Card from "./Card";
import { animals } from "../constants/words/animals";

const WordList = () => {
  const filteredAnimals = [];
  const arr = [];

  while (arr.length < 4) {
    let randomWordNum = Math.floor(Math.random() * 15);
    if (!arr.includes(randomWordNum)) {
      arr.push(randomWordNum);
    }
  }

  for (let i in arr) {
    filteredAnimals.push(animals[arr[i]]);
  }

  console.log(animals);
  console.log(arr);
  console.log(filteredAnimals);

  return (
    <div className="word-list">
      <ul>
        {filteredAnimals.map((word) => {
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
    </div>
  );
};

export default WordList;
