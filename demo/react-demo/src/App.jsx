import "./App.css";
import { Outlet, Link } from "react-router-dom";

export const App = () => {
  return (
    <div className="sidebar" id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"contacts"}>Contacts</Link>
          </li>
          <li>
            <Link to={"about"}>about</Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
      <div>
        <h1>footer</h1>
      </div>
    </div>
  );
};
