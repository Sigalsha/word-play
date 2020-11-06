import { v4 as uuid } from "uuid";

import bread from "../../assets/food/bread.png";
import cannedFish from "../../assets/food/canned-fish.png";
import carrot from "../../assets/food/carrot.png";
import chiliPepper from "../../assets/food/chili-pepper.png";
import chocolateBar from "../../assets/food/chocolate-bar.png";
import coffeeCup from "../../assets/food/coffee-cup.png";
import corn from "../../assets/food/corn.png";
import flour from "../../assets/food/flour.png";
import frenchFries from "../../assets/food/french-fries.png";
import friedEggs from "../../assets/food/fried-eggs.png";
import garlic from "../../assets/food/garlic.png";
import honeyJar from "../../assets/food/honey-jar.png";
import peanut from "../../assets/food/peanut.png";
import pear from "../../assets/food/pear.png";
import pizza from "../../assets/food/pizza-slice.png";
import vendingMachine from "../../assets/food/vending-machine.png";

export const food = [
  { name: "bread", img: bread, id: uuid() },
  { name: "canned-fish", img: cannedFish, id: uuid() },
  { name: "carrot", img: carrot, id: uuid() },
  { name: "chili-pepper", img: chiliPepper, id: uuid() },
  { name: "chocolate-bar", img: chocolateBar, id: uuid() },
  { name: "coffee-cup", img: coffeeCup, id: uuid() },
  { name: "corn", img: corn, id: uuid() },
  { name: "flour", img: flour, id: uuid() },
  { name: "french-fries", img: frenchFries, id: uuid() },
  { name: "fried-eggs", img: friedEggs, id: uuid() },
  { name: "garlic", img: garlic, id: uuid() },
  { name: "honey-jar", img: honeyJar, id: uuid() },
  { name: "peanut", img: peanut, id: uuid() },
  { name: "pear", img: pear, id: uuid() },
  { name: "pizza-slice", img: pizza, id: uuid() },
  { name: "vending-machine", img: vendingMachine, id: uuid() },
];
