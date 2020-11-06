import { v4 as uuid } from "uuid";

import earrings from "../../assets/personal/earrings.png";
import headphones from "../../assets/personal/headphones.png";
import keys from "../../assets/personal/house-keys.png";
import idCard from "../../assets/personal/id-card.png";
import money from "../../assets/personal/money-stack.png";
import newspaper from "../../assets/personal/newspaper.png";
import passport from "../../assets/personal/passport.png";
import pearlNecklace from "../../assets/personal/pearl-necklace.png";
import phone from "../../assets/personal/phone.png";
import ring from "../../assets/personal/ring.png";
import bag from "../../assets/personal/shopping-bag.png";
import suitcase from "../../assets/personal/suitcase.png";
import sunglasses from "../../assets/personal/sunglasses.png";
import ticket from "../../assets/personal/ticket.png";
import wallet from "../../assets/personal/wallet.png";
import watch from "../../assets/personal/watch.png";
import waterBottle from "../../assets/personal/water-bottle.png";

export const personal = [
  { name: "earrings", img: earrings, id: uuid() },
  { name: "headphones", img: headphones, id: uuid() },
  { name: "keys", img: keys, id: uuid() },
  { name: "id-card", img: idCard, id: uuid() },
  { name: "money", img: money, id: uuid() },
  { name: "newspaper", img: newspaper, id: uuid() },
  { name: "passport", img: passport, id: uuid() },
  { name: "pearl-necklace", img: pearlNecklace, id: uuid() },
  { name: "phone", img: phone, id: uuid() },
  { name: "ring", img: ring, id: uuid() },
  { name: "bag", img: bag, id: uuid() },
  { name: "suitcase", img: suitcase, id: uuid() },
  { name: "sunglasses", img: sunglasses, id: uuid() },
  { name: "ticket", img: ticket, id: uuid() },
  { name: "wallet", img: wallet, id: uuid() },
  { name: "watch", img: watch, id: uuid() },
  { name: "water-bottle", img: waterBottle, id: uuid() },
];
