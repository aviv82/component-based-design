import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <div className="sidebar" id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={"contacts"}>Contacts</Link>
          </li>
          <li>
            <Link to={"/home"}>home</Link>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};
