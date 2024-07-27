import { Outlet } from "react-router";
import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
