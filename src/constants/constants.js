import pizza from "../assets/food/pizza-slice.png";
import computer from "../assets/computer/pc.png";
import building from "../assets/buildings/congress.png";

export const intro = {
  header: "Welcome to Word Play!",
  desc: "To practice your english vocabulary, please click Start",
  button: "Start Play",
};

export const selectSubject = {
  header: "Select a subject",
  subjects: [
    { name: "animals", id: 1 },
    { name: "clothes", id: 2 },
    { name: "food", id: 3, img: pizza },
    { name: "computer", id: 4, img: computer },
    { name: "personal", id: 5 },
    { name: "bathroom", id: 6 },
    { name: "buildings", id: 7, img: building },
    { name: "places", id: 8 },
  ],
};
