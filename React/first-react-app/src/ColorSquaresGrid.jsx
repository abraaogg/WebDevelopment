import ColorSquares from "./ColorSquares";
import "./ColorSquaresGrid.css";
function ColorSquaresGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorSquares colors={colors} />);
  }
  return <div className="ColorSquaresGrid">{boxes}</div>;
}

export default ColorSquaresGrid;
