import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li className="nav-bar-link">
          <Link to={`/`}>home</Link>
        </li>
        <li className="nav-bar-link">
          <Link to={`/groups`}>groups</Link>
        </li>
        <li className="nav-bar-link">
          <Link to={`/members`}>members</Link>
        </li>
      </ul>
    </nav>
  );
};
