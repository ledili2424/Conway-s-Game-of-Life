import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Grid.css";

export default function Grid({
  rows,
  cols,
  updateLivingCellsCount,
  randomAliveCells,
}) {
  const [grid, setGrid] = useState(
    Array.from(Array(rows), () => new Array(cols).fill(0))
  );
  console.log(rows);
  console.log(cols);
  console.log(grid);

  useEffect(
    function () {
      const newGrid = Array.from({ length: rows }, () =>
        new Array(cols).fill(0)
      );

      if (randomAliveCells && randomAliveCells.length > 0) {
        for (let i = 0; i < randomAliveCells.length; i++) {
          const [row, col] = randomAliveCells[i];
          if (row >= 0 && row < rows && col >= 0 && col < cols) {
            newGrid[row][col] = 1;
          }
        }
      }
      setGrid(newGrid);
    },
    [randomAliveCells, rows, cols]
  );

  function toggleCellState(row, col) {
    const newGrid = [...grid];
    newGrid[row][col] = 1 - newGrid[row][col]; 
    setGrid(newGrid);

    const livingCellsCount = newGrid
      .flat()
      .reduce((count, cell) => count + cell, 0);
    updateLivingCellsCount(livingCellsCount);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 20px)`,
        gridTemplateRows: `repeat(${rows}, 20px)`,
      }}
    >
      {Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isAlive={grid[rowIndex][colIndex] === 1}
            onClick={() => toggleCellState(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  updateLivingCellsCount: PropTypes.func.isRequired,
  randomAliveCells: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number.isRequired)
  ),
};
