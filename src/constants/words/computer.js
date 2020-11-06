import { v4 as uuid } from "uuid";
import batteries from "../../assets/computer/batteries.png";
import buttonFinger from "../../assets/computer/button-finger.png";
import cameraIcon from "../../assets/computer/camera-icon.png";
import charging from "../../assets/computer/charging.png";
import keyboard from "../../assets/computer/keyboard.png";
import laptop from "../../assets/computer/laptop.png";
import load from "../../assets/computer/load.png";
import microphoneIcon from "../../assets/computer/microphone-icon.png";
import mouse from "../../assets/computer/mouse.png";
import plug from "../../assets/computer/plug.png";
import save from "../../assets/computer/save.png";
import smartphone from "../../assets/computer/smartphone.png";
import tablet from "../../assets/computer/tablet.png";
import usb from "../../assets/computer/usb.png";
import videoConference from "../../assets/computer/video-conference.png";
import wifiRouter from "../../assets/computer/wifi-router.png";

export const computer = [
  { name: "batteries", img: batteries, id: uuid() },
  { name: "button-finger", img: buttonFinger, id: uuid() },
  { name: "camera-icon", img: cameraIcon, id: uuid() },
  { name: "charging", img: charging, id: uuid() },
  { name: "keyboard", img: keyboard, id: uuid() },
  { name: "laptop", img: laptop, id: uuid() },
  { name: "load", img: load, id: uuid() },
  { name: "microphone-icon", img: microphoneIcon, id: uuid() },
  { name: "mouse", img: mouse, id: uuid() },
  { name: "plug", img: plug, id: uuid() },
  { name: "save", img: save, id: uuid() },
  { name: "smartphone", img: smartphone, id: uuid() },
  { name: "tablet", img: tablet, id: uuid() },
  { name: "usb", img: usb, id: uuid() },
  { name: "video-conference", img: videoConference, id: uuid() },
  { name: "wifi-router", img: wifiRouter, id: uuid() },
];
