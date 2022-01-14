import React from "react";
import Star from "../Star/Star";

export default function MakeRandomStars() {

    const arr = Array.from({length: 50}, (e, index) =>  index)

  return (
    <div style={{ zIndex: -1,overflow: 'hidden', position: 'absolute', height:"100vh", width:"100vw", top: 0, left: 0}}>
      {arr.map(e => (
          <Star key={e}/>
      ))}
    </div>
  );
}
