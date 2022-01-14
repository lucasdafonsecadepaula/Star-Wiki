import React from "react";

export default function Star() {
    console.log()

    const xPosition = Math.floor(Math.random() * (window.innerWidth - 50))
    const yPosition = Math.floor(Math.random() * (window.innerHeight - 50))

  return (
    <div
      style={{
        zIndex: 0,
        position: "relative",
        top: `${yPosition}px`,
        left: `${xPosition}px`,
        height: "4px",
        width: "4px",
        borderRadius: "50%",
        boxShadow: "0px 0px 15px rgba(255,255,255,0.4)",
        background: "#ffff",
      }}
    ></div>
  );
}
