import NavBar from "./NavBar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="rules">
        <p className="title-rule">Rules for the Game of Life:</p>
        <ul>
          <li>Each cell with one or no neighbors dies, as if by solitude.</li>
          <li>
            Each cell with four or more neighbors dies, as if by overpopulation.
          </li>
          <li>Each cell with two or three neighbors survives.</li>
          <li>
            A dead cell with exactly three live neighbours becomes a live cell,
            as if by reproduction.
          </li>
        </ul>
      </div>
    </div>
  );
}
