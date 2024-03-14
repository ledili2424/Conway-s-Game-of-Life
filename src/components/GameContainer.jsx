import { useState, useEffect } from "react";
import Grid from "./Grid";
import "./GameContainer.css";

const getRandomAliveCells = (rows, cols) => {
  const aliveCells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const randomValue = Math.random();
      if (randomValue < 0.05) {
        aliveCells.push([i, j]);
      }
    }
  }
  return aliveCells;
};

export default function GameContainer() {
  const [inputValue1, setinputValue1] = useState(20);
  const [inputValue2, setinputValue2] = useState(20);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [livingCellsCount, setLivingCellsCount] = useState(0);
  const [isError, setError] = useState(false);
  const [randomAliveCells, setRandomAliveCells] = useState(
    getRandomAliveCells(rows, cols)
  );

  function handleClickReset() {
    if (
      inputValue1 > 40 ||
      inputValue1 < 3 ||
      inputValue2 > 40 ||
      inputValue2 < 3
    ) {
      setError(true);
    } else {
      setError(false);
      setRows(inputValue1);
      setCols(inputValue2);
      setRandomAliveCells(getRandomAliveCells(inputValue1, inputValue2));
    }
  }

  useEffect(
    function () {
      const count = randomAliveCells.length;
      setLivingCellsCount(count);
    },
    [randomAliveCells]
  );

  return (
    <div className="game-container">
      <p>Count Living Cells: {livingCellsCount}</p>
      <Grid
        rows={rows}
        cols={cols}
        setLivingCellsCount={setLivingCellsCount}
        randomAliveCells={randomAliveCells}
      />
      <div className="inputs">
        <label className="height">
          Height(3-40)
          <input
            className="input"
            value={inputValue1}
            onChange={(e) => setinputValue1(+e.target.value, 10)}
          />
        </label>
        <label className="width">
          Width(3-40)
          <input
            className="input"
            value={inputValue2}
            onChange={(e) => setinputValue2(+e.target.value, 10)}
          />
        </label>
      </div>
      <button onClick={handleClickReset}>Reset Game</button>
      {isError && <p>Invalid height/width!(should be between 3 and 40)</p>}
    </div>
  );
}
