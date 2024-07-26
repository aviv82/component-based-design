import "./navBar.css";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li>
          <Link to={`/`} className="nav-bar-link">
            home
          </Link>
        </li>
        <li>
          <Link to={`groups`} className="nav-bar-link">
            groups
          </Link>
        </li>
        <li>
          <Link to={`members`} className="nav-bar-link">
            members
          </Link>
        </li>
      </ul>
    </nav>
  );
};
