import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Intro
          </Link>
        </li>
        <li>
          <Link to="/game" className="nav-link">
            Game
          </Link>
        </li>
        <li>
          <Link to="/info" className="nav-link">
            Dev Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}
