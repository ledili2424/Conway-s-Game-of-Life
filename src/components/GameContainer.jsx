import React, { useState } from "react";
import Grid from "./Grid";

export default function GameContainer() {
  const [inputValue1, setinputValue1] = useState("");
  const [inputValue2, setinputValue2] = useState("");
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [livingCellsCount, setLivingCellsCount] = useState(0);
  const [isError, setError] = useState(false);

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
    }
  }

  return (
    <div>
      <p>Count Living Cells:{livingCellsCount}</p>
      <Grid
        rows={rows}
        cols={cols}
        updateLivingCellsCount={setLivingCellsCount}
        placeholder="Enter width (3-40)"
      />
      <label>
        Height(3-40)
        <input
          type="number"
          value={inputValue1}
          onChange={(e) => setinputValue1(e.target.value)}
        />
      </label>
      <label>
        Width(3-40)
        <input
          type="number"
          value={inputValue2}
          onChange={(e) => setinputValue2(e.target.value)}
        />
      </label>
      <button onClick={handleClickReset}>Reset Game</button>
      {isError && <p>Invalid height/width!</p>}
    </div>
  );
}
