import { v4 as uuid } from "uuid";
import belt from "../../assets/clothes/belt.png";
import bowTie from "../../assets/clothes/bow-tie.png";
import dress from "../../assets/clothes/dress.png";
import gloves from "../../assets/clothes/gloves.png";
import hanger from "../../assets/clothes/hanger.png";
import hoodie from "../../assets/clothes/hoodie.png";
import poloShirt from "../../assets/clothes/polo-shirt.png";
import ribbon from "../../assets/clothes/ribbon.png";
import shirt from "../../assets/clothes/shirt.png";
import shorts from "../../assets/clothes/shorts.png";
import socks from "../../assets/clothes/socks.png";
import tankTop from "../../assets/clothes/tank-top.png";
import trousers from "../../assets/clothes/trousers.png";
import underwearShorts from "../../assets/clothes/underwear-shorts.png";
import underwear from "../../assets/clothes/underwear.png";
import zipper from "../../assets/clothes/zipper.png";

export const clothesOptions = [
  { name: "belt", img: belt, id: uuid() },
  { name: "bow-tie", img: bowTie, id: uuid() },
  { name: "dress", img: dress, id: uuid() },
  { name: "gloves", img: gloves, id: uuid() },
  { name: "hanger", img: hanger, id: uuid() },
  { name: "hoodie", img: hoodie, id: uuid() },
  { name: "polo-shirt", img: poloShirt, id: uuid() },
  { name: "ribbon", img: ribbon, id: uuid() },
  { name: "shirt", img: shirt, id: uuid() },
  { name: "shorts", img: shorts, id: uuid() },
  { name: "socks", img: socks, id: uuid() },
  { name: "tank-top", img: tankTop, id: uuid() },
  { name: "trousers", img: trousers, id: uuid() },
  { name: "underwear-shorts", img: underwearShorts, id: uuid() },
  { name: "underwear", img: underwear, id: uuid() },
  { name: "zipper", img: zipper, id: uuid() },
];
