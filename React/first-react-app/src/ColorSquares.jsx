import { useState } from "react";
import "./ColorSquares.css";

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function ColorSquares({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="ColorSquares"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorSquares;