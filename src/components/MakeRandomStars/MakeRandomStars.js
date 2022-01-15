import React from "react";
import Star from "../Star/Star";
import { Body } from "./style";

export default function MakeRandomStars() {
  const arr = Array.from({ length: 50 }, (e, index) => index);

  return (
    <Body>
      {arr.map((e) => (
        <Star key={e} />
      ))}
    </Body>
  );
}
