import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Grid.css";
import { GridContext } from "./GridContext";

export default function Grid({
  rows,
  cols,
  setLivingCellsCount,
  randomAliveCells,
}) {
  const [grid, setGrid] = useState(
    Array.from(Array(rows), () => new Array(cols).fill(0))
  );
  // console.log(rows);
  // console.log(cols);
  // console.log(grid);

  useEffect(
    function () {
      const newGrid = Array.from(Array(rows), () => new Array(cols).fill(0));

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

  const updatelivingCellsCount = function (newGrid) {
    return newGrid
      .flat()
      .reduce((count, cellIsAlive) => count + cellIsAlive, 0);
  };

  function toggleCellState(row, col) {
    const newGrid = [...grid];
    newGrid[row][col] = 1 - newGrid[row][col];
    setGrid(newGrid);
    setLivingCellsCount(updatelivingCellsCount(newGrid));
  }

  function handleClickNext() {
    const nextGrid = Array.from({ length: rows }, (r, rowIndex) =>
      Array.from({ length: cols }, (c, colIndex) => {
        return calculateNext(rowIndex, colIndex);
      })
    );
    setGrid(nextGrid);
    setLivingCellsCount(updatelivingCellsCount(nextGrid));
  }

  const calculateNext = function (row, col) {
    const currentCellState = grid[row][col];
    const neighbors = getNeighbors(row, col);
    const livingNeighbors = neighbors.reduce(
      (count, [neiRow, neiCol]) => count + grid[neiRow][neiCol],
      0
    );

    if (currentCellState === 1) {
      if (livingNeighbors === 2 || livingNeighbors === 3) return 1;
      else return 0;
    } else {
      if (livingNeighbors === 3) return 1;
      else return 0;
    }
  };

  const getNeighbors = function (row, col) {
    const neightbors = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1],
    ];
    for (let dir of directions) {
      neightbors.push([row + dir[0], col + dir[1]]);
    }
    return neightbors.filter(
      ([neiRow, neiCol]) =>
        neiRow >= 0 && neiRow < rows && neiCol >= 0 && neiCol < cols
    );
  };

  return (
    <div className="grid">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
          gridTemplateRows: `repeat(${rows}, 20px)`,
        }}
      >
        {Array.from({ length: rows }, (r, rowIndex) =>
          Array.from({ length: cols }, (c, colIndex) => (
            <GridContext.Provider
              value={{ grid, rowIndex, colIndex }}
              key={`${rowIndex}-${colIndex}`}
            >
              <Cell onClick={() => toggleCellState(rowIndex, colIndex)} />
            </GridContext.Provider>
          ))
        )}
      </div>
      <button onClick={handleClickNext} className="next-button">Next</button>
    </div>
  );
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  setLivingCellsCount: PropTypes.func.isRequired,
  randomAliveCells: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number.isRequired)
  ),
};
