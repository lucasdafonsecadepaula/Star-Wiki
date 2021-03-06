import React, { useContext } from "react";
import { favoriteContext } from "../../context/FavoriteProvider";

import { Body } from "./style";

export default function Heart({ person }) {
  const { favoritePerson } = useContext(favoriteContext);

  return (
    <Body props={{ person, favoritePerson }}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="32.000000pt"
        height="32.000000pt"
        viewBox="0 0 32.000000 32.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)">
          <path
            d="M52 253 c-33 -28 -36 -63 -10 -105 27 -43 93 -98 118 -98 25 0 91 55
118 98 15 24 20 46 17 62 -12 53 -79 78 -117 43 -17 -15 -19 -15 -36 0 -24 22
-64 22 -90 0z"
          />
        </g>
      </svg>
    </Body>
  );
}
