export const wordReducer = (state, action) => {
  function filterWordsBySubjectAndIndex(subjectArr) {
    console.log(subjectArr);

    let filteredWords = [];
    let arr = [];

    while (arr.length < 4) {
      let randomWordNum = Math.floor(Math.random() * 15);
      if (!arr.includes(randomWordNum)) {
        arr.push(randomWordNum);
      }
    }

    console.log(arr, "after while loop");

    for (let i in arr) {
      filteredWords.push(subjectArr[arr[i]]);
    }
    console.log(filteredWords, "after filter by arr");
    return filteredWords;
  }

  switch (action.type) {
    case "GENERATE_WORDS":
      return [...state, ...filterWordsBySubjectAndIndex(action.chosenSubject)];
    case "CORRECT_ANSWER":
      return [];
    default:
      return state;
  }
};
