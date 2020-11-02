import pizza from "../assets/food/pizza-slice.png";
import computer from "../assets/computer/pc.png";
import building from "../assets/buildings/congress.png";
import clothes from "../assets/clothes/clothes.png";
import animals from "../assets/animals/bear-face.png";
import personal from "../assets/personal/pearl-necklace.png";
import household from "../assets/household/wooden-chair.png";
import body from "../assets/body/strong.png";

export const intro = {
  header: "Welcome to Word Play!",
  desc: "To practice your english vocabulary, please click Start",
  button: "Start Play",
};

export const selectSubject = {
  header: "Select a subject",
  subjectsList: [
    { name: "animals", id: 1, img: animals },
    { name: "clothes", id: 2, img: clothes },
    { name: "food", id: 3, img: pizza },
    { name: "computer", id: 4, img: computer },
    { name: "personal", id: 5, img: personal },
    { name: "household", id: 6, img: household },
    { name: "buildings", id: 7, img: building },
    { name: "body", id: 8, img: body },
  ],
};
