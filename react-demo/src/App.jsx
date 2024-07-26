import "./App.css";

import { Outlet } from "react-router";

import { NavBar } from "./components/nav-bar/NavBar";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
