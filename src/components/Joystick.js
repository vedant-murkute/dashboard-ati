import React, { useEffect, useState } from "react";
import "../index.css"

export const Joystick = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("white");

  useEffect(() => {
    const centrePostion = { x: position.x + 100, y: position.y + 100 };
    if (centrePostion.x > 400) setColor("red");
    else if (centrePostion.x < 200) setColor("yellow");
    else if (
      centrePostion.x > 200 &&
      centrePostion.x < 400 &&
      position.y + 100 < 200
    )
      setColor("purple");
    else if (
      centrePostion.x > 200 &&
      centrePostion.x < 400 &&
      position.y + 100 > 400
    )
      setColor("green");
    else setColor("white");
  }, [position]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setPosition({
      x: 200,
      y: 200,
    });
    setColor("white");
    setIsDragging(false);
  };

  const absoluteCentreStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        height: 600,
        width: 600,
        position: "relative",
        border: "solid",
        margin: 'auto'
      }}
    >
      <div
        className="draggable"
        style={{
          backgroundColor: "beige",
          width: 200,
          height: 200,
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: isDragging ? "grabbing" : "grab",
          borderRadius: "50%",
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ><span className={"noselect"}>Drag Me</span></div>
      <span className={"noselect"} style={{...absoluteCentreStyle, top: 100, left: 300 }}>Purple</span>
      <span className={"noselect"} style={{...absoluteCentreStyle, top: 300, left: 500 }}>Red</span>
      <span className={"noselect"} style={{...absoluteCentreStyle, top: 500, left: 300 }}>Green</span>
      <span className={"noselect"} style={{...absoluteCentreStyle, top: 300, left: 100 }}>Yellow</span>
    </div>
  );
};
