export const wordReducer = (state, action) => {
  function filterWordsBySubjectAndIndex(subjectArr) {
    let filteredWords = [];
    let arr = [];

    while (arr.length < 4) {
      let randomWordNum = Math.floor(Math.random() * 15);
      if (!arr.includes(randomWordNum)) {
        arr.push(randomWordNum);
      }
    }

    for (let i in arr) {
      filteredWords.push(subjectArr[arr[i]]);
    }
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
