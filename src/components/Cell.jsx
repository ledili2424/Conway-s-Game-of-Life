import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { GridContext } from "./GridContext";

export default function Cell({ onClick }) {
  const { grid, rowIndex: row, colIndex: col } = useContext(GridContext);
  
  const isValidCell =
    row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;

  const [isAlive, setAlive] = useState(
    isValidCell ? grid[row][col] === 1 : false
  );

  useEffect(
    function () {
      if (isValidCell) {
        setAlive(grid[row][col] === 1);
      }
    },
    [grid, row, col, isValidCell]
  );
  return (
    <div
      onClick={onClick}
      style={{
        width: "20px",
        height: "20px",
        border: "1px solid #ccc",
        backgroundColor: isAlive ? "black" : "white",
      }}
    ></div>
  );
}
