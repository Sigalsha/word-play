import { v4 as uuid } from "uuid";
import alarmClock from "../../assets/household/alarm-clock.png";
import barStool from "../../assets/household/bar-stool.png";
import bathtub from "../../assets/household/bathtub.png";
import bedLamp from "../../assets/household/bed-lamp.png";
import bookshelf from "../../assets/household/bookshelf.png";
import broom from "../../assets/household/broom.png";
import ceilingLight from "../../assets/household/ceiling-light.png";
import doorHandle from "../../assets/household/door-handle.png";
import flowerPot from "../../assets/household/flower-pot.png";
import liquidSoap from "../../assets/household/liquid-soap.png";
import officeChair from "../../assets/household/office-chair.png";
import shower from "../../assets/household/shower.png";
import tap from "../../assets/household/tap.png";
import towel from "../../assets/household/towel.png";
import trashCan from "../../assets/household/trash-can.png";
import vacuumCleaner from "../../assets/household/vacuum-cleaner.png";

export const household = [
  { name: "alarm-clock", img: alarmClock, id: uuid() },
  { name: "bar-stool", img: barStool, id: uuid() },
  { name: "bathtub", img: bathtub, id: uuid() },
  { name: "bed-lamp", img: bedLamp, id: uuid() },
  { name: "bookshelf", img: bookshelf, id: uuid() },
  { name: "broom", img: broom, id: uuid() },
  { name: "ceiling-light", img: ceilingLight, id: uuid() },
  { name: "door-handle", img: doorHandle, id: uuid() },
  { name: "flower-pot", img: flowerPot, id: uuid() },
  { name: "liquid-soap", img: liquidSoap, id: uuid() },
  { name: "office-chair", img: officeChair, id: uuid() },
  { name: "shower", img: shower, id: uuid() },
  { name: "tap", img: tap, id: uuid() },
  { name: "towel", img: towel, id: uuid() },
  { name: "trash-can", img: trashCan, id: uuid() },
  { name: "vacuum-cleaner", img: vacuumCleaner, id: uuid() },
];
