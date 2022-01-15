import React from "react";
import { Body } from "./style";

export default function Star() {
  const xPosition = Math.floor(Math.random() * (window.innerWidth - 50));
  const yPosition = Math.floor(Math.random() * (window.innerHeight - 50));

  return <Body value={{ xPosition, yPosition }} />;
}
