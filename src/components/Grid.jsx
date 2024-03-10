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

  useEffect(() => {
    console.log(rows + "insdie");
    console.log(cols + "isd");
    const newGrid = Array.from(Array(rows), () => new Array(cols).fill(0));
    console.log(newGrid);

    if (randomAliveCells && randomAliveCells.length > 0) {
      for (let i = 0; i < randomAliveCells.length; i++) {
        const [row, col] = randomAliveCells[i];
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          newGrid[row][col] = 1;
        }
      }

      setGrid(newGrid);

      const count = randomAliveCells.length;
      updateLivingCellsCount(count);
    }
  }, [rows, cols, updateLivingCellsCount, randomAliveCells, grid]);

  function toggleCellState() {}

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
            isAlive={true}
            onClick={toggleCellState}
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
