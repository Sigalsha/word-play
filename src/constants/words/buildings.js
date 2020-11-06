import { v4 as uuid } from "uuid";
import ancientRuins from "../../assets/buildings/ancient-ruins.png";
import bank from "../../assets/buildings/bank.png";
import barn from "../../assets/buildings/barn.png";
import campingTent from "../../assets/buildings/camping-tent.png";
import castle from "../../assets/buildings/castle.png";
import controlTower from "../../assets/buildings/control-tower.png";
import elevator from "../../assets/buildings/elevator.png";
import escalator from "../../assets/buildings/escalator.png";
import factory from "../../assets/buildings/factory.png";
import kidSlide from "../../assets/buildings/kid-slide.png";
import ladder from "../../assets/buildings/ladder.png";
import postOffice from "../../assets/buildings/post-office.png";
import shop from "../../assets/buildings/shop.png";
import stairs from "../../assets/buildings/stairs.png";
import village from "../../assets/buildings/village.png";
import watchtower from "../../assets/buildings/watchtower.png";

export const buildingsOptions = [
  { name: "ancient-ruins", img: ancientRuins, id: uuid() },
  { name: "bank", img: bank, id: uuid() },
  { name: "barn", img: barn, id: uuid() },
  { name: "camping-tent", img: campingTent, id: uuid() },
  { name: "castle", img: castle, id: uuid() },
  { name: "control-tower", img: controlTower, id: uuid() },
  { name: "elevator", img: elevator, id: uuid() },
  { name: "escalator", img: escalator, id: uuid() },
  { name: "factory", img: factory, id: uuid() },
  { name: "kid-slide", img: kidSlide, id: uuid() },
  { name: "ladder", img: ladder, id: uuid() },
  { name: "post-office", img: postOffice, id: uuid() },
  { name: "shop", img: shop, id: uuid() },
  { name: "stairs", img: stairs, id: uuid() },
  { name: "village", img: village, id: uuid() },
  { name: "watchtower", img: watchtower, id: uuid() },
];
