import { v4 as uuid } from "uuid";
import bat from "../../assets/animals/bat.png";
import donkey from "../../assets/animals/donkey.png";
import eagle from "../../assets/animals/eagle.png";
import goat from "../../assets/animals/goat.png";
import hound from "../../assets/animals/hound.png";
import parrot from "../../assets/animals/parrot.png";
import polarBear from "../../assets/animals/polar-bear.png";
import rat from "../../assets/animals/rat.png";
import raven from "../../assets/animals/raven.png";
import rooster from "../../assets/animals/rooster.png";
import seahorse from "../../assets/animals/seahorse.png";
import snail from "../../assets/animals/snail.png";
import whale from "../../assets/animals/whale.png";
import squid from "../../assets/animals/squid.png";
import swan from "../../assets/animals/swan.png";
import turtle from "../../assets/animals/turtle.png";

export const animals = [
  { name: "bat", img: bat, id: uuid() },
  { name: "donkey", img: donkey, id: uuid() },
  { name: "eagle", img: eagle, id: uuid() },
  { name: "goat", img: goat, id: uuid() },
  { name: "hound", img: hound, id: uuid() },
  { name: "parrot", img: parrot, id: uuid() },
  { name: "polar-bear", img: polarBear, id: uuid() },
  { name: "rat", img: rat, id: uuid() },
  { name: "raven", img: raven, id: uuid() },
  { name: "rooster", img: rooster, id: uuid() },
  { name: "seahorse", img: seahorse, id: uuid() },
  { name: "snail", img: snail, id: uuid() },
  { name: "whale", img: whale, id: uuid() },
  { name: "squid", img: squid, id: uuid() },
  { name: "swan", img: swan, id: uuid() },
  { name: "turtle", img: turtle, id: uuid() },
];
