import { v4 as uuid } from "uuid";
import bodyHeight from "../../assets/body/body-height.png";
import brain from "../../assets/body/brain.png";
import eyelashes from "../../assets/body/eyelashes.png";
import faceToFace from "../../assets/body/face-to-face.png";
import femaleLegs from "../../assets/body/female-legs.png";
import fingernail from "../../assets/body/fingernail.png";
import fingersCrossed from "../../assets/body/fingers-crossed.png";
import hand from "../../assets/body/hand.png";
import heart from "../../assets/body/heart.png";
import ear from "../../assets/body/ear.png";
import joint from "../../assets/body/joint.png";
import lips from "../../assets/body/lips.png";
import lungs from "../../assets/body/lungs.png";
import nose from "../../assets/body/nose.png";
import shakingHands from "../../assets/body/shaking-hands.png";
import teeth from "../../assets/body/teeth.png";
import worriedEyes from "../../assets/body/worried-eyes.png";

export const bodyOptions = [
  { name: "body-height", img: bodyHeight, id: uuid() },
  { name: "brain", img: brain, id: uuid() },
  { name: "eyelashes", img: eyelashes, id: uuid() },
  { name: "face-to-face", img: faceToFace, id: uuid() },
  { name: "female-legs", img: femaleLegs, id: uuid() },
  { name: "fingernail", img: fingernail, id: uuid() },
  { name: "fingers-crossed", img: fingersCrossed, id: uuid() },
  { name: "hand", img: hand, id: uuid() },
  { name: "heart", img: heart, id: uuid() },
  { name: "ear", img: ear, id: uuid() },
  { name: "joint", img: joint, id: uuid() },
  { name: "lips", img: lips, id: uuid() },
  { name: "lungs", img: lungs, id: uuid() },
  { name: "nose", img: nose, id: uuid() },
  { name: "shaking-hands", img: shakingHands, id: uuid() },
  { name: "teeth", img: teeth, id: uuid() },
  { name: "worried-eyes", img: worriedEyes, id: uuid() },
];
